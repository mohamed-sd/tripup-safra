import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusListPage } from './bus-list.page';

describe('BusListPage', () => {
  let component: BusListPage;
  let fixture: ComponentFixture<BusListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
