import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertaPage } from './alerta.page';

const routes: Routes = [
  {
    path: '',
    component: AlertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertaPageRoutingModule {}
