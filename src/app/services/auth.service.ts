import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { PayloadToken } from "../models/PayloadToken";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isConnectedVerif() {
    const token = localStorage.getItem("authToken");
    if (token) {
      const payloadJwt: PayloadToken = jwtDecode(token);
      if (Date.now() < payloadJwt.exp * 1000) {
        return true;
      }
    }
    return false;
  }
}
