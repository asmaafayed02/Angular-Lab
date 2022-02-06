import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDiscountProductComponent } from './no-discount-product.component';

describe('NoDiscountProductComponent', () => {
  let component: NoDiscountProductComponent;
  let fixture: ComponentFixture<NoDiscountProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDiscountProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDiscountProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
