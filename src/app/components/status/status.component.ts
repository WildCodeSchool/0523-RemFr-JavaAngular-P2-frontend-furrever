import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"],
})
export class StatusComponent implements OnInit {

  @Input() statusFlag: string | null | undefined;
  classeName = "pending";
  title = "En attente";

  ngOnInit(): void {
    switch (this.statusFlag) {
      case "pending":
        this.classeName = "pending";
        this.title = "En attente";
        break;
      case "refused":
        this.classeName = "refused";
        this.title = "Refusée";
        break;
      case "validated":
        this.classeName = "validated";
        this.title = "Acceptée";
        break;
      case "completed":
        this.classeName = "completed";
        this.title = "Complétée";
        break;
      default:
        this.classeName = "pending";
        this.title = "En attente";
    }
  }

}
