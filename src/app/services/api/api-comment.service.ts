import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Comment } from "../../models/Comment";

@Injectable({
  providedIn: "root",
})
export class ApiCommentService {
  constructor(public http: HttpClient) {}
  getTopComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>("http://localhost:8080/api/comments/top");
  }
}
