import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindItDiscountsComponent } from './find-it-discounts.component';

describe('FindItDiscountsComponent', () => {
  let component: FindItDiscountsComponent;
  let fixture: ComponentFixture<FindItDiscountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindItDiscountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindItDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
