import { Component, Input } from "@angular/core";
import { Transation } from "../../../pages/profile/profile.component";

@Component({
  selector: "app-transaction-details",
  templateUrl: "./transaction-details.component.html",
  styleUrls: ["./transaction-details.component.scss"],
})
export class TransactionDetailsComponent {
  @Input() transaction?: Transation;
  @Input() isPetsitter!: boolean;
}
