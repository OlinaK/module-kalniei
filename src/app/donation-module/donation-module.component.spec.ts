import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationmoduleComponent } from './donation-module.component';

describe('DonationmoduleComponent', () => {
  let component: DonationmoduleComponent;
  let fixture: ComponentFixture<DonationmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
