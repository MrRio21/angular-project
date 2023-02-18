import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsViewComponent } from './carts-view.component';

describe('CartsViewComponent', () => {
  let component: CartsViewComponent;
  let fixture: ComponentFixture<CartsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
