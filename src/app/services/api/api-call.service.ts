import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Comment } from "../../models/Comment";
import { Species } from "../../models/Species";
import { PetsitterPreview } from "../../models/PetsitterPreview";
import { SearchRequest } from "../../models/SearchRequest";
import { PetsitterViewByOwner } from "../../models/PetsitterViewByOwner";
import { Service } from "../../models/Service";

type ResponsePetSitter = {
  commentTemplateList: Comment[];
  petSitterProfile: PetsitterViewByOwner;
  serviceTemplateList: Service[];
};

@Injectable({
  providedIn: "root",
})
export class ApiCallService {
  readonly API_URL = "http://localhost:8080/api/";
  private endPointGetTopComments = "comments/top";
  private endPointGetSpecies = "species";
  private endPointSearchPetsitter = "petsitters/search";
  private endPointGetPetSitterById = "petsitters/";

  constructor(public http: HttpClient) {}

  getTopComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.API_URL + this.endPointGetTopComments);
  }

  getSpeciesName(): Observable<Species[]> {
    return this.http.get<Species[]>(this.API_URL + this.endPointGetSpecies);
  }

  getPetsitters(payload: SearchRequest): Observable<PetsitterPreview[]> {
    return this.http.post<PetsitterPreview[]>(this.API_URL + this.endPointSearchPetsitter, payload);
  }

  getPetsittersById(id: string): Observable<ResponsePetSitter> {
    return this.http.get<ResponsePetSitter>(this.API_URL + this.endPointGetPetSitterById + id);
  }
}
