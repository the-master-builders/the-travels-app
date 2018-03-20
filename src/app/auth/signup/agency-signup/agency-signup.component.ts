import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-agency-signup',
  templateUrl: './agency-signup.component.html',
  styleUrls: ['./agency-signup.component.css']
})
export class AgencySignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = new FormGroup({
      agencyName: new FormControl('', { validators: [Validators.required] }),
      agencyEmail: new FormControl('', { validators: [Validators.required] }),
      agencyPhone: new FormGroup({
        countryCode: new FormControl('', { validators: Validators.required }),
        contactNo: new FormControl('', { validators: Validators.required })
      }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(8)] }),
      confirmPassword: new FormControl('', { validators: [Validators.required, Validators.minLength(8)] }),
      agreedTerms: new FormControl('', { validators: [Validators.required] })
    });
  }

  onLogin() {
    this.authSvc.registerAgent({ email: this.signupForm.value.agencyEmail, password: this.signupForm.value.password }).then(
      (response) => {
        this.authSvc.storeAgencyDetails({
          name: this.signupForm.value.agencyName,
          agencyId: response.uid,
          email: this.signupForm.value.agencyEmail,
          phone: {
            countryCode: this.signupForm.value.agencyPhone.countryCode,
            contactNo: this.signupForm.value.agencyPhone.contactNo,
          },
          contractSigned: this.signupForm.value.agreedTerms
        });
      }
    ).catch(
      (error: Error) => {
        console.error(error.message);
      }
    );
  }
}
