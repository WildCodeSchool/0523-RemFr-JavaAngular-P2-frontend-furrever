import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Comment } from "../../models/Comment";
import { Species } from "../../models/Species";
import { PetsitterPreview } from "../../models/PetsitterPreview";
import { SearchRequest } from "../../models/SearchRequest";
import { UserProfile } from "../../models/UserProfile";
import { Service } from "../../models/Service";
import { TokenJwt } from "../../models/TokenJwt";
import { Login } from "../../models/Login";
import { SendService } from "../../models/SendService";
import { Animal } from "../../models/Animal";
import { GetProfileUserResponse } from "../../models/GetProfileUserResponse";

type ResponsePetSitter = {
  commentTemplateList: Comment[];
  petSitterProfile: UserProfile;
  serviceTemplateList: Service[];
};

export type User = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  isPetsitter: boolean | null;
  picture: string | null;
};

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
    createTransaction: "transactions",
    createAnimal: "users/animals",
    getCurrentUser: "users",
  };

  constructor(public http: HttpClient) {}

  getTopComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.API_URL + this.endPoints.getTopComments);
  }

  getSpeciesName(): Observable<Species[]> {
    return this.http.get<Species[]>(this.API_URL + this.endPoints.getSpecies);
  }

  getPetsitters(payload: SearchRequest): Observable<PetsitterPreview[]> {
    return this.http.post<PetsitterPreview[]>(this.API_URL + this.endPoints.searchPetsitter, payload);
  }

  getPetsittersById(id: string): Observable<ResponsePetSitter> {
    return this.http.get<ResponsePetSitter>(this.API_URL + this.endPoints.getPetSitterById + id);
  }

  createUser(payload: User) {
    return this.http.post<User>(this.API_URL + this.endPoints.createUser, payload);
  }

  loginRequest(payload: Login): Observable<TokenJwt> {
    return this.http.post<TokenJwt>(this.API_URL + this.endPoints.login, payload);
  }

  createTransaction(payload: SendService) {
    return this.http.post<any>(this.API_URL + this.endPoints.createTransaction, payload);
  }

  createAnimal(payload: Animal): Observable<Animal> {
    return this.http.post<any>(this.API_URL + this.endPoints.createAnimal, payload);
  }

  getCurrentUser(){
    return this.http.get<GetProfileUserResponse>(this.API_URL + this.endPoints.getCurrentUser);
  }
}
