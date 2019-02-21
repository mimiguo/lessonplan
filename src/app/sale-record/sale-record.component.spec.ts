import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleRecordComponent } from './sale-record.component';

describe('SaleRecordComponent', () => {
  let component: SaleRecordComponent;
  let fixture: ComponentFixture<SaleRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
