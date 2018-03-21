import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AgencySignupComponent } from './signup/agency-signup/agency-signup.component';
import { TouristSignupComponent } from './signup/tourist-signup/tourist-signup.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AgencySigninComponent } from './signin/agency-signin/agency-signin.component';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        AgencySignupComponent,
        TouristSignupComponent,
        AgencySigninComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ],
    exports: [
        AuthRoutingModule
    ]
})
export class AuthModule { }
