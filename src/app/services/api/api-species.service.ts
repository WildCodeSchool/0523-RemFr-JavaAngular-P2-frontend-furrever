import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Species } from "../../models/Species";

@Injectable({
  providedIn: 'root'
})
export class ApiSpeciesService {

  constructor(private http: HttpClient) { }

  getSpeciesName(): Observable<Species[]> {
    return this.http.get<Species[]>("http://localhost:8080/api/species");
  }
}
