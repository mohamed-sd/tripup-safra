import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainConfirmBookingPage } from './train-confirm-booking.page';

const routes: Routes = [
  {
    path: '',
    component: TrainConfirmBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainConfirmBookingPageRoutingModule {}
