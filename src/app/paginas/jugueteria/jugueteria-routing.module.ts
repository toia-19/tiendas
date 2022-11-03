import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugueteriaPage } from './jugueteria.page';

const routes: Routes = [
  {
    path: '',
    component: JugueteriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugueteriaPageRoutingModule {}
