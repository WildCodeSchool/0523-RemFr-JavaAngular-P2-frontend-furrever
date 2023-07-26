import { Component, Input } from "@angular/core";
import { Transaction } from "../../../models/Transaction";

@Component({
  selector: "app-transaction-details",
  templateUrl: "./transaction-details.component.html",
  styleUrls: ["./transaction-details.component.scss"],
})
export class TransactionDetailsComponent {
  @Input() transaction?: Transaction;
  @Input() isPetsitter!: boolean;
}
