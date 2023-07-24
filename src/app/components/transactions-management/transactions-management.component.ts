import { Component, Input } from "@angular/core";

@Component({
  selector: "app-transactions-management",
  templateUrl: "./transactions-management.component.html",
  styleUrls: ["./transactions-management.component.scss"],
})
export class TransactionsManagementComponent {
  @Input() transactionList!: any[];
}
