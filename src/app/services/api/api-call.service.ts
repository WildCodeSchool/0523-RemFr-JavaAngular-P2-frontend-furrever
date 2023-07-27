import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Comment } from "../../models/Comment";
import { Species } from "../../models/Species";
import { PetsitterPreview, PetsitterResponse, ResponsePetSitter } from "../../models/PetsitterPreview";
import { SearchRequest } from "../../models/SearchRequest";
import { User } from "../../models/UserProfile";
import { Service } from "../../models/Service";
import { TokenJwt } from "../../models/TokenJwt";
import { Login } from "../../models/Login";
import { SendService } from "../../models/SendService";
import { CreateTransactionResponse, GetTransaction } from "../../models/Transaction";
import { Animal } from "../../models/Animal";
import { GetProfileUserResponse } from "../../models/GetProfileUserResponse";

@Injectable({
  providedIn: "root",
})
export class ApiCallService {
  readonly API_URL = "http://localhost:8080/api/";

  readonly endPoints = {
    getTopComments: "comments/top",
    getSpecies: "species",
    searchPetsitter: "petsitters/search",
    login: "auth/login",
    getPetSitterById: "petsitters/",
    createUser: "auth/register",
    transaction: "transactions",
    updateOrDeleteTransaction: "transactions/",
    createAnimal: "users/animals",
    getCurrentUser: "users",
    services: "services",
  };

  constructor(public http: HttpClient) {}

  getTopComments() {
    return this.http.get<Comment[]>(this.API_URL + this.endPoints.getTopComments);
  }

  getSpeciesName() {
    return this.http.get<Species[]>(this.API_URL + this.endPoints.getSpecies);
  }

  getPetsitters(payload: SearchRequest) {
    return this.http.post<PetsitterPreview[]>(this.API_URL + this.endPoints.searchPetsitter, payload);
  }

  getPetsittersById(id: string) {
    return this.http.get<ResponsePetSitter>(this.API_URL + this.endPoints.getPetSitterById + id);
  }

  createUser(payload: User) {
    return this.http.post<PetsitterResponse>(this.API_URL + this.endPoints.createUser, payload);
  }

  loginRequest(payload: Login) {
    return this.http.post<TokenJwt>(this.API_URL + this.endPoints.login, payload);
  }

  createTransaction(payload: SendService) {
    return this.http.post<CreateTransactionResponse>(this.API_URL + this.endPoints.transaction, payload);
  }

  getTransactions() {
    return this.http.get<GetTransaction>(this.API_URL + this.endPoints.transaction);
  }

  updateTransaction(payload: boolean) {
    return this.http.post<void>(this.API_URL + this.endPoints.updateOrDeleteTransaction, payload);
  }

  deleteTransaction(id: string) {
    return this.http.delete<void>(this.API_URL + this.endPoints.updateOrDeleteTransaction + id);
  }

  createAnimal(payload: Animal) {
    return this.http.post<Animal>(this.API_URL + this.endPoints.createAnimal, payload);
  }

  getCurrentUser() {
    return this.http.get<GetProfileUserResponse>(this.API_URL + this.endPoints.getCurrentUser);
  }

  createService(payload: Service) {
    return this.http.post<Service>(this.API_URL + this.endPoints.services, payload);
  }
}
