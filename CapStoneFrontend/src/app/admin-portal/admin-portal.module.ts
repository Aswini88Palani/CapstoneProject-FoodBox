import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { RouterModule} from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminCuisineComponent } from './admin-cuisine/admin-cuisine.component';


@NgModule({
  declarations: [
    AdminWelcomeComponent,
    AdminLoginComponent,
    AdminCuisineComponent
  ],
  imports: [
    CommonModule,
    AdminPortalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class AdminPortalModule { }
