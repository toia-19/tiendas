import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SexshopPageRoutingModule } from './sexshop-routing.module';

import { SexshopPage } from './sexshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexshopPageRoutingModule
  ],
  declarations: [SexshopPage]
})
export class SexshopPageModule {}
