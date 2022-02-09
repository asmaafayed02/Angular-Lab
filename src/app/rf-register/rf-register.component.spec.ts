import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfRegisterComponent } from './rf-register.component';

describe('RfRegisterComponent', () => {
  let component: RfRegisterComponent;
  let fixture: ComponentFixture<RfRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
