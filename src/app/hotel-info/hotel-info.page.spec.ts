import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelInfoPage } from './hotel-info.page';

describe('HotelInfoPage', () => {
  let component: HotelInfoPage;
  let fixture: ComponentFixture<HotelInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
