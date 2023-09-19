import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHotelComponent } from './service-hotel.component';

describe('ServiceHotelComponent', () => {
  let component: ServiceHotelComponent;
  let fixture: ComponentFixture<ServiceHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceHotelComponent]
    });
    fixture = TestBed.createComponent(ServiceHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
