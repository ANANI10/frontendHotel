import { TestBed } from '@angular/core/testing';

import { ServiceHotelService } from './service-hotel.service';

describe('ServiceHotelService', () => {
  let service: ServiceHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
