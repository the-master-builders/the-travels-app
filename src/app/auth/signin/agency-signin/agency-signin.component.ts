import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-agency-signin',
  templateUrl: './agency-signin.component.html',
  styleUrls: ['./agency-signin.component.css']
})
export class AgencySigninComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] })
    });
  }

  onLogin() {
    this.authSvc.loginAgency({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

}
