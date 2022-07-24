import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FoodRoutingModule } from './food-routing.module';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { EditFoodComponent } from './edit-food/edit-food.component';


@NgModule({
  declarations: [
    FoodlistComponent,
    EditFoodComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FoodModule { }
