import { Component, Input, OnInit } from "@angular/core";
import { ApiCallService } from "../../../services/api/api-call.service";
import { FormBuilder } from "@angular/forms";
import { User, UserProfile } from "../../../models/UserProfile";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { addUserOnStore } from "../../../services/state/userStore.actions";

@Component({
  selector: "app-update-profile-form",
  templateUrl: "./update-profile-form.component.html",
  styleUrls: ["./update-profile-form.component.scss"],
})
export class UpdateProfileFormComponent implements OnInit {
  @Input() user!: UserProfile;
  errors: string[] = [];
  userStore$!: Observable<boolean>;

  updateUserForm = this.fb.group({
    firstname: [""],
    lastname: [""],
    picture: [""],
    isPetSitter: [false],
    description: [""],
    streetNumber: [""],
    street: [""],
    additionalAddress: [""],
    city: [""],
    zipCode: [""],
  });

  constructor(
    private apiCallService: ApiCallService,
    private store: Store<{ userStore: boolean }>,
    private toastr: ToastrService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.updateUserForm.controls.firstname.setValue(this.user.firstname);
    this.updateUserForm.controls.lastname.setValue(this.user.lastname);
    this.updateUserForm.controls.picture.setValue(this.user.picture);
    this.updateUserForm.controls.isPetSitter.setValue(this.user.isPetSitter);
    this.updateUserForm.controls.description.setValue(this.user.description);
    this.updateUserForm.controls.streetNumber.setValue(this.user.location!.streetNumber);
    this.updateUserForm.controls.street.setValue(this.user.location!.street);
    this.updateUserForm.controls.additionalAddress.setValue(this.user.location!.additionalAddress);
    this.updateUserForm.controls.city.setValue(this.user.location!.city);
    this.updateUserForm.controls.zipCode.setValue(this.user.location!.zipCode);
    this.userStore$ = this.store.select("userStore");
  }

  sendUpdateUserForm() {
    this.errors = [];
    this.validation(
      this.updateUserForm.getRawValue().firstname,
      this.updateUserForm.getRawValue().lastname,
      this.updateUserForm.getRawValue().picture,
      this.updateUserForm.getRawValue().isPetSitter,
      this.updateUserForm.getRawValue().description,
      this.updateUserForm.getRawValue().street,
      this.updateUserForm.getRawValue().city,
      this.updateUserForm.getRawValue().zipCode
    );
    const updateUser: User = {
      firstname: this.updateUserForm.getRawValue().firstname,
      lastname: this.updateUserForm.getRawValue().lastname,
      picture: this.updateUserForm.getRawValue().picture,
      isPetSitter: this.updateUserForm.getRawValue().isPetSitter,
      email: null,
      password: null,
      description: this.updateUserForm.getRawValue().description,
      location: {
        id: this.user.location!.id,
        streetNumber: this.updateUserForm.getRawValue().streetNumber,
        street: this.updateUserForm.getRawValue().street,
        additionalAddress: this.updateUserForm.getRawValue().additionalAddress,
        city: this.updateUserForm.getRawValue().city!.toLowerCase(),
        zipCode: this.updateUserForm.getRawValue().zipCode,
      },
    };
    const picture = this.updateUserForm.getRawValue().picture;
    if (this.errors.length <= 0 && picture) {
      this.apiCallService.updateUser(updateUser).subscribe(() => {
        this.store.dispatch(addUserOnStore({ picture }));
        this.redirectTo("/profile");
        this.toastr.success("Votre profil a bien été mis à jour.");
      });
    }
  }

  redirectTo(uri: string) {
    this.route.navigateByUrl("/", { skipLocationChange: true }).then(() => this.route.navigate([uri]));
  }

  validation(
    firstname: string | null,
    lastname: string | null,
    picture: string | null,
    isPetSitter: boolean | null,
    description: string | null,
    street: string | null,
    city: string | null,
    zipCode: string | null
  ) {
    if (!firstname) {
      this.errors.push("Votre prénom n'est pas valide.");
    }
    if (!lastname) {
      this.errors.push("Votre nom n'est pas valide.");
    }
    if (!picture) {
      this.errors.push("Merci de choisir une image de profil.");
    }
    if (!description) {
      this.errors.push("Merci de remplir la description.");
    }
    if (!street) {
      this.errors.push("Merci de remplir la rue.");
    }
    if (!city) {
      this.errors.push("Merci de remplir la ville");
    }
    if (!zipCode) {
      this.errors.push("Merci de remplir le code postal.");
    }
  }
}
