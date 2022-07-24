import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CartRoutingModule } from './cart-routing.module';
import { ChooseCartComponent } from './choose-cart/choose-cart.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    ChooseCartComponent,
    SearchFilterPipe,
    ShowCartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
