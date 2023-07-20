import { Component, Input } from "@angular/core";
import { Service } from "../../models/Service";

@Component({
  selector: "app-services-list",
  templateUrl: "./services-list.component.html",
  styleUrls: ["./services-list.component.scss"],
})
export class ServicesListComponent {
  @Input() serviceList!: Service[];
  @Input() petSitterFirstName!: string;
}
