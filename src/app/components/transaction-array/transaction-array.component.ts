import { Component, Input, OnInit } from "@angular/core";
import { Transaction } from "../../models/Transaction";

@Component({
  selector: "app-transaction-array",
  templateUrl: "./transaction-array.component.html",
  styleUrls: ["./transaction-array.component.scss"],
})
export class TransactionArrayComponent implements OnInit {
  @Input() transactionList: Transaction[] = [];
  @Input() isPetsitter!: boolean;
  transaction?: Transaction;
  showModal = false;
  @Input() className!: string;
  title!: string;

  ngOnInit(): void {
    switch (this.className) {
      case "pending":
        this.title = "En attentes";
        break;
      case "validate":
        this.title = "Validées";
        break;
      case "refused":
        this.title = "Refusées";
        break;
      case "completed":
        this.title = "Complétées";
        break;
      default:
        this.title = "En attentes";
    }
  }
  isShowModal(id: string) {
    if (id !== "close") {
      this.transaction = this.transactionList?.find((transaction) => transaction.id === id);
    }
    this.showModal = !this.showModal;
  }
}
