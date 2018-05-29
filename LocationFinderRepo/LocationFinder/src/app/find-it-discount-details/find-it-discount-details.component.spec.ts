import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindItDiscountDetailsComponent } from './find-it-discount-details.component';

describe('FindItDiscountDetailsComponent', () => {
  let component: FindItDiscountDetailsComponent;
  let fixture: ComponentFixture<FindItDiscountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindItDiscountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindItDiscountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
