import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInformation2Component } from './order-information2.component';

describe('OrderInformationComponent', () => {
  let component: OrderInformation2Component;
  let fixture: ComponentFixture<OrderInformation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInformation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInformation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
