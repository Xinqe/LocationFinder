import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindItComponent } from './find-it.component';

describe('FindItComponent', () => {
  let component: FindItComponent;
  let fixture: ComponentFixture<FindItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
