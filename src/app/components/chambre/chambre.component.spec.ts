import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreComponent } from './chambre.component';

describe('ChambreComponent', () => {
  let component: ChambreComponent;
  let fixture: ComponentFixture<ChambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChambreComponent]
    });
    fixture = TestBed.createComponent(ChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
