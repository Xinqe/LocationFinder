import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalWebbserviceComponent } from './external-webbservice.component';

describe('ExternalWebbserviceComponent', () => {
  let component: ExternalWebbserviceComponent;
  let fixture: ComponentFixture<ExternalWebbserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalWebbserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalWebbserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
