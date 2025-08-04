import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { HotelInfoPageRoutingModule } from './hotel-info-routing.module';

import { HotelInfoPage } from './hotel-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    HotelInfoPageRoutingModule
  ],
  declarations: [HotelInfoPage]
})
export class HotelInfoPageModule {}
