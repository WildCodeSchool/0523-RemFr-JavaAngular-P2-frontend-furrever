import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiCallService } from "../../services/api/api-call.service";
import { Transaction } from "../../models/Transaction";

@Component({
  selector: "app-transactions-management",
  templateUrl: "./transactions-management.component.html",
  styleUrls: ["./transactions-management.component.scss"],
})
export class TransactionsManagementComponent implements OnInit {
  isPetsitter = false;
  viewForPetsitter = false;
  showTransaction = false;
  transactionPetsitterList: Transaction[] = [];
  transactionISentList: Transaction[] = [];
  pendingTransactionList: Transaction[] = [];
  transactionListValidated: Transaction[] = [];
  transactionListRefused: Transaction[] = [];
  transactionListCompleted: Transaction[] = [];
  counter = 0;
  loader = true;

  constructor(
    private authService: AuthService,
    private route: Router,
    private apiCallService: ApiCallService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
    const param = this.activatedRoute.snapshot.queryParams;
    if (param["viewforpetsitter"] && typeof param["viewforpetsitter"] === "boolean") {
      this.viewForPetsitter = param["viewforpetsitter"];
    }
    this.apiCallService.getTransactions().subscribe((response) => {
      this.isPetsitter = response.petsitter;
      this.transactionPetsitterList = response.transactionForPetsitter;
      this.transactionISentList = response.transactionFromUser;
      if (param["viewforpetsitter"] && response.petsitter) {
        this.sortTransaction(response.transactionForPetsitter);
        this.showTransaction = true;
        this.viewForPetsitter = true;
      } else {
        this.sortTransaction(response.transactionFromUser);
      }
      const today = new Date();
      const forCounter = response.transactionForPetsitter.filter((transaction) => {
        const end = new Date(transaction.dateEnd);
        const timeDiffForEndToday = end.getTime() - today.getTime();
        return transaction.status === null && timeDiffForEndToday > 0;
      });
      this.counter = forCounter.length;
      this.loader = false;
    });
  }

  showTransactionRequest() {
    this.showTransaction = !this.showTransaction;
    if (this.showTransaction) {
      this.sortTransaction(this.transactionPetsitterList);
      this.viewForPetsitter = true;
    } else {
      this.sortTransaction(this.transactionISentList);
      this.viewForPetsitter = false;
    }
  }

  sortTransaction(transactionList: Transaction[]) {
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
