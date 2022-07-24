import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserPortalRoutingModule } from './user-portal-routing.module';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';


@NgModule({
  declarations: [
    UserWelcomeComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    UserPortalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserPortalModule { }
