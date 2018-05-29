import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindItDiscountCreateComponent } from './find-it-discount-create.component';

describe('FindItDiscountCreateComponent', () => {
  let component: FindItDiscountCreateComponent;
  let fixture: ComponentFixture<FindItDiscountCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindItDiscountCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindItDiscountCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
