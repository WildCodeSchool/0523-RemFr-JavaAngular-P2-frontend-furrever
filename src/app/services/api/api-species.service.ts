import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiSpeciesService {

  constructor(private http: HttpClient) { }

  getSpeciesName(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/species");
  }
}
