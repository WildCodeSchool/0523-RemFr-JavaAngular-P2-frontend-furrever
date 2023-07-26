import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { ApiCallService } from "../../services/api/api-call.service";
import { Transaction } from "../../models/Transaction";

@Component({
  selector: "app-transactions-management",
  templateUrl: "./transactions-management.component.html",
  styleUrls: ["./transactions-management.component.scss"],
})
export class TransactionsManagementComponent implements OnInit {
  isPetsitter = false;
  showTransaction = false;
  transactionPetsitterList: Transaction[] = [];
  transactionISentList: Transaction[] = [];
  pendingTransactionList: Transaction[] = [];
  transactionListValidated: Transaction[] = [];
  transactionListRefused: Transaction[] = [];
  transactionListCompleted: Transaction[] = [];
  counter = 0;

  constructor(private authService: AuthService, private route: Router, private apiCallService: ApiCallService) {}

  ngOnInit(): void {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
    this.apiCallService.getTransactions().subscribe(({ transactionForPetsitter, transactionFromUser, petsitter }) => {
      this.isPetsitter = petsitter;
      this.transactionPetsitterList = transactionForPetsitter;
      this.transactionISentList = transactionFromUser;
      this.sortTransaction(transactionFromUser);
      const today = new Date();
      const forCounter = transactionForPetsitter.filter((transaction) => {
        const end = new Date(transaction.dateEnd);
        const timeDiffForEndToday = end.getTime() - today.getTime();
        return transaction.status === null && timeDiffForEndToday > 0;
      });
      this.counter = forCounter.length;
    });
  }

  showTransactionRequest() {
    this.showTransaction = !this.showTransaction;
    if (this.showTransaction) {
      this.sortTransaction(this.transactionPetsitterList);
    } else {
      this.sortTransaction(this.transactionISentList);
    }
  }

  sortTransaction(transactionList: Transaction[]) {
    console.log(transactionList);
    const today = new Date();
    this.pendingTransactionList = transactionList.filter((transaction) => {
      const end = new Date(transaction.dateEnd);
      const timeDiffForEndToday = end.getTime() - today.getTime();
      return transaction.status === null && timeDiffForEndToday > 0;
    });
    this.transactionListRefused = transactionList.filter((transaction) => {
      const end = new Date(transaction.dateEnd);
      const timeDiffForEndToday = end.getTime() - today.getTime();
      return transaction.status === false || (transaction.status === null && timeDiffForEndToday < 0);
    });
    this.transactionListValidated = transactionList.filter((transaction) => {
      const end = new Date(transaction.dateEnd);
      const timeDiffForEndToday = end.getTime() - today.getTime();
      return transaction.status && timeDiffForEndToday > 0;
    });
    this.transactionListCompleted = transactionList.filter((transaction) => {
      const end = new Date(transaction.dateEnd);
      const timeDiffForEndToday = end.getTime() - today.getTime();
      return transaction.status && timeDiffForEndToday < 0;
    });
    this.pendingTransactionList.forEach((transaction) => (transaction.statusFlag = "pending"));
    this.transactionListRefused.forEach((transaction) => (transaction.statusFlag = "refused"));
    this.transactionListValidated.forEach((transaction) => (transaction.statusFlag = "validated"));
    this.transactionListCompleted.forEach((transaction) => (transaction.statusFlag = "completed"));
  }
}
