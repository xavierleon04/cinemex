import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidsPage } from './kids.page';

const routes: Routes = [
  {
    path: '',
    component: KidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidsPageRoutingModule {}
