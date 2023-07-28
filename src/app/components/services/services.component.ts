import { Component, Input } from "@angular/core";
import { Service } from "../../models/Service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent {
  @Input() service!: Service;
  showModal = false;
  @Input() petSitterFirstName!: string;
  @Input() userInfoView?: boolean;
  isShowModal() {
    this.showModal = !this.showModal;
  }
}
