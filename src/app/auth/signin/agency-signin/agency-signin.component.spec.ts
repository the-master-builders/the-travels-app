import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencySigninComponent } from './agency-signin.component';

describe('AgencySigninComponent', () => {
  let component: AgencySigninComponent;
  let fixture: ComponentFixture<AgencySigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencySigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencySigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
