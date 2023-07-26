import { Component, Input, OnInit } from "@angular/core";
import { ApiCallService } from "../../../services/api/api-call.service";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { UserProfile } from "../../../models/UserProfile";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";

@Component({
  selector: "app-update-profile-form",
  templateUrl: "./update-profile-form.component.html",
  styleUrls: ["./update-profile-form.component.scss"],
})
export class UpdateProfileFormComponent implements OnInit{
  @Input() user!: UserProfile;
  errors: string[] = [];
  userStore$!: Observable<boolean>;
  test = false;
  updateUserForm = this.fb.group({
    firstname: [""],
    lastname: [""],
    picture: [""],
    isPetSitter: [false],
  });

  ngOnInit() {
    this.updateUserForm.controls.firstname.setValue(this.user.firstname);
    this.updateUserForm.controls.lastname.setValue(this.user.lastname);
    this.updateUserForm.controls.picture.setValue(this.user.picture);
    this.updateUserForm.controls.isPetSitter.setValue(this.user.isPetSitter);
    this.test = this.user.isPetSitter;
  }

  constructor(
    private apiCallService: ApiCallService,
    private activatedRoute: ActivatedRoute,
    private store: Store<{ userStore: boolean }>,
    private toastr: ToastrService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  sendUpdateUserForm() {
    this.errors = [];
    this.validation(
      this.updateUserForm.getRawValue().firstname,
      this.updateUserForm.getRawValue().lastname,
      this.updateUserForm.getRawValue().picture,
      this.updateUserForm.getRawValue().isPetSitter
    );
    if (this.errors.length <= 0) {
      console.log(this.updateUserForm.getRawValue());
      this.apiCallService.updateUser(this.updateUserForm.getRawValue()).subscribe(() => {
        this.toastr.success("test");
      });
    }
  }

  validation(firstname: string | null, lastname: string | null, picture: string | null, isPetSitter: boolean | null) {
    if (!firstname) {
      console.log(firstname);
      this.errors.push("Votre prénom n'est pas une adresse valide.");
    }
    if (!lastname) {
      console.log(lastname);
      this.errors.push("Votre mot de passe n'est pas un mot de passe valide.");
    }
    if (!picture) {
      console.log(picture);
      this.errors.push("Merci de choisir une image de profil.");
    }
    if (!isPetSitter) {
      console.log(isPetSitter);
      this.errors.push("Merci de cocher un choix.");
    }
  }
}
