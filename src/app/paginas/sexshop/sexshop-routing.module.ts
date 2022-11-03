import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SexshopPage } from './sexshop.page';

const routes: Routes = [
  {
    path: '',
    component: SexshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SexshopPageRoutingModule {}
