import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewItemComponent } from './cart-view-item.component';

describe('CartViewItemComponent', () => {
  let component: CartViewItemComponent;
  let fixture: ComponentFixture<CartViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartViewItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
