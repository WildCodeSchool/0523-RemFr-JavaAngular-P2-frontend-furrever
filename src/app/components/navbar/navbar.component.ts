import {Component, OnChanges, OnInit} from "@angular/core";
import jwtDecode from "jwt-decode";


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnChanges{
  isLog = false;
  ngOnChanges(): void {
    const token = localStorage.getItem("authtoken");
    if (token) {
      this.isLog = true;
      const jwt = JSON.parse(token);
      console.log('token parse', jwt)
      console.log('jwt decode', jwtDecode(jwt))
    }
    this.isLog = false;
  }


}
