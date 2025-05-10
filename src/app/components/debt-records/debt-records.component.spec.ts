import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtRecordsComponent } from './debt-records.component';

describe('DebtRecordsComponent', () => {
  let component: DebtRecordsComponent;
  let fixture: ComponentFixture<DebtRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
