import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      agencyName: new FormControl('', { validators: [Validators.required] }),
      agencyEmail: new FormControl('', { validators: [Validators.required, Validators.email] }),
      agencyPhone: new FormGroup({
        countryCode: new FormControl('', { validators: [Validators.required]}),
        contactNo: new FormControl('', { validators: [Validators.required]})
      }),
    });
  }


}
