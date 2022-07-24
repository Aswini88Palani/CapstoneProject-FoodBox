import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPortalModule } from './user-portal/user-portal.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminPortalModule } from './admin-portal/admin-portal.module';
import { FoodModule } from './food/food.module';
import { CartModule } from './cart/cart.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserPortalModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminPortalModule,
    FoodModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
