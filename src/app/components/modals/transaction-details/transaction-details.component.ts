import { Component, Input } from "@angular/core";
import { Transaction } from "../../../models/Transaction";
import { ApiCallService } from "../../../services/api/api-call.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-transaction-details",
  templateUrl: "./transaction-details.component.html",
  styleUrls: ["./transaction-details.component.scss"],
})
export class TransactionDetailsComponent {
  @Input() transaction?: Transaction;
  @Input() isPetsitter!: boolean;
  commentModal: boolean = false;
  constructor(private apiCallService: ApiCallService, private toastr: ToastrService, private route: Router) {}

  valide(decision: boolean, transaction: Transaction) {
    const today = new Date();
    const end = new Date(transaction.dateEnd);
    const timeDiffForEndToday = end.getTime() - today.getTime();
    if (transaction && transaction.status === null && timeDiffForEndToday > 0) {
      this.apiCallService.updateTransaction(decision).subscribe({
        next: () => {
          if (decision) {
            this.toastr.success("Vous avez accepté la demande de transaction.");
          } else {
            this.toastr.success("Vous avez refusé la demande de transaction.");
          }
          this.route.navigateByUrl("/", { skipLocationChange: true }).then(() => this.route.navigate(["transactions"]));
        },
        error: () => {
          this.toastr.error("Une erreur est survenue, actualisez votre page et réessayez l'opération.");
        },
      });
    } else {
      this.toastr.error("Une erreur est survenue, actualisez votre page et réessayez l'opération.");
    }
  }

  delete(transaction: Transaction) {
    const today = new Date();
    const end = new Date(transaction.dateEnd);
    const timeDiffForEndToday = end.getTime() - today.getTime();
    if (transaction.status === null && timeDiffForEndToday > 0) {
      this.apiCallService.deleteTransaction(transaction.idTransaction).subscribe({
        next: () => {
          this.toastr.success("Votre demande de transaction a été supprimée.");
          this.route.navigateByUrl("/", { skipLocationChange: true }).then(() => this.route.navigate(["transactions"]));
        },
        error: () => {
          this.toastr.error("Une erreur est survenue, actualisez votre page et réessayez l'opération.");
        },
      });
    } else {
      this.toastr.error("Une erreur est survenue, actualisez votre page et réessayez l'opération.");
    }
  }

  openCommentModale(){
    this.commentModal = !this.commentModal;
  }
}
