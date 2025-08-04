import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomestayMapPage } from './homestay-map.page';

const routes: Routes = [
  {
    path: '',
    component: HomestayMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomestayMapPageRoutingModule {}
