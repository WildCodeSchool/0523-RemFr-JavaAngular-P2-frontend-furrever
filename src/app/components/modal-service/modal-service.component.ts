import { Component, Input } from "@angular/core";
import { Service } from "../../models/Service";

@Component({
  selector: "app-modal-service",
  templateUrl: "./modal-service.component.html",
  styleUrls: ["./modal-service.component.scss"],
})
export class ModalServiceComponent {
  @Input()
  service!: Service;
}
