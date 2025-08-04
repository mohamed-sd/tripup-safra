import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route: Router, @Inject(APP_CONFIG) public config: AppConfig, private modalController: ModalController) { }

  ngOnInit() {
  }
  search_flights() {
    this.route.navigate(['./search-flights']);
  }
  search_hotel() {
    this.route.navigate(['./search-hotel']);
  }
  search_train() {
    this.route.navigate(['./search-train']);
  }
  search_holiday() {
    this.route.navigate(['./search-holiday']);
  }
  search_bus() {
    this.route.navigate(['./search-bus']);
  }
  search_cab() {
    this.route.navigate(['./search-cab']);
  }
  search_homestay() {
    this.route.navigate(['./search-homestay']);
  }
  hotel_info() {
    this.route.navigate(['./hotel-info']);
  }

  buyAppAction() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  }
}
