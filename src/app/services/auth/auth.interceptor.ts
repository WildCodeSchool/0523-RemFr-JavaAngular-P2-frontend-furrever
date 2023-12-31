import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { ApiCallService } from "../api/api-call.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private apiCallService: ApiCallService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.isConnectedVerif()) {
      const token = localStorage.getItem("authToken");
      const callApiRouteTransaction = request.url.startsWith(
        this.apiCallService.API_URL + this.apiCallService.endPoints.transaction
      );
      const callApiRouteAnimal = request.url.startsWith(
        this.apiCallService.API_URL + this.apiCallService.endPoints.createAnimal
      );
      const callApiRouteUser = request.url.startsWith(
        this.apiCallService.API_URL + this.apiCallService.endPoints.user
      );
      const callApiRouteService = request.url.startsWith(
        this.apiCallService.API_URL + this.apiCallService.endPoints.services
      );
      if (token && (callApiRouteTransaction || callApiRouteAnimal || callApiRouteUser || callApiRouteService)) {
        request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
      }
    }
    return next.handle(request).pipe(
      catchError((e) => {
        const error = e.error?.message || e.statusText;
        return throwError(() => new Error(error));
      })
    );
  }
}
