import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseCartComponent } from './choose-cart/choose-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ShowCartComponent } from './show-cart/show-cart.component';

const routes: Routes = [
  {path: 'ShowCart/:cart', component:ShowCartComponent},
  {path: 'chooseCart', component:ChooseCartComponent},
  {path: 'Payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
