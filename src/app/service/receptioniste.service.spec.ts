import { TestBed } from '@angular/core/testing';

import { ReceptionisteService } from './receptioniste.service';

describe('ReceptionisteService', () => {
  let service: ReceptionisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
