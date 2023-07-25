import { Component, OnInit } from "@angular/core";
import { Transation } from "../profile/profile.component";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-transactions-management",
  templateUrl: "./transactions-management.component.html",
  styleUrls: ["./transactions-management.component.scss"],
})
export class TransactionsManagementComponent implements OnInit {
  showModal = false;
  transaction?: Transation;
  isPetsitter = false;
  transactionList: Transation[] = [
    {
      id: "1",
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "garde rapporché 1",
      userName: "Maude",
      petsitter: "Bruno",
      status: null,
      content: "blab blab bla je suis beau, vraiment très beau",
      statusFlag: "pending",
    },
    {
      id: "2",
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "Promenade quotidienne 2",
      userName: "Maude",
      petsitter: "Bruno",
      status: null,
      content: "blab blab bla je suis beau, vraiment très beau",
      statusFlag: "pending",
    },
    {
      id: "3",
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "garde rapporché 3",
      userName: "Maude",
      petsitter: "Bruno",
      status: true,
      content: "blab blab bla je suis beau, vraiment très beau",
      statusFlag: "pending",
    },
    {
      id: "4",
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "garde rapporché 4",
      userName: "Maude",
      petsitter: "Bruno",
      status: false,
      content: "blab blab bla je suis beau, vraiment très beau",
      statusFlag: "pending",
    },
    {
      id: "5",
      dateSart: "2023-07-23",
      dateEnd: "2023-07-23",
      serviceType: "garde rapporché 1",
      userName: "Maude",
      petsitter: "Bruno",
      status: true,
      content: "blab blab bla je suis beau, vraiment très beau",
      statusFlag: "pending",
    },
    {
      id: "6",
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "Promenade quotidienne 2",
      userName: "Maude",
      petsitter: "Bruno",
      status: false,
      content: "blab blab bla je suis beau, vraiment très beau",
      statusFlag: "pending",
    },
    {
      id: "7",
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "garde rapporché 3",
      userName: "Maude",
      petsitter: "Bruno",
      status: true,
      content: "blab blab bla je suis beau, vraiment très beau",
      statusFlag: "pending",
    },
    {
      id: "89",
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "garde rapporché 4",
      userName: "Maude",
      petsitter: "Bruno",
      status: true,
      content: "blab blab bla je suis beau, vraiment très beau",
      statusFlag: "pending",
    },
  ];
  pendingTransactionList: Transation[] = [];
  transactionListValidated: Transation[] = [];
  transactionListRefused: Transation[] = [];
  transactionListCompleted: Transation[] = [];

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
    const today = new Date();
    this.pendingTransactionList = this.transactionList.filter((transaction) => transaction.status === null);
    this.transactionListRefused = this.transactionList.filter((transaction) => transaction.status === false);
    this.transactionListValidated = this.transactionList.filter((transaction) => {
      const end = new Date(transaction.dateEnd);
      const timeDiffForEndToday = end.getTime() - today.getTime();
      return transaction.status && timeDiffForEndToday > 0;
    });
    this.transactionListCompleted = this.transactionList.filter((transaction) => {
      const end = new Date(transaction.dateEnd);
      const timeDiffForEndToday = end.getTime() - today.getTime();
      return transaction.status && timeDiffForEndToday < 0;
    });
    this.pendingTransactionList.forEach((transaction) => (transaction.statusFlag = "pending"));
    this.transactionListRefused.forEach((transaction) => (transaction.statusFlag = "refused"));
    this.transactionListValidated.forEach((transaction) => (transaction.statusFlag = "validated"));
    this.transactionListCompleted.forEach((transaction) => (transaction.statusFlag = "completed"));
  }

  isShowModal(id: string) {
    if (id !== "close") {
      this.transaction = this.transactionList.find((transaction) => transaction.id === id);
    }
    this.showModal = !this.showModal;
  }
}
