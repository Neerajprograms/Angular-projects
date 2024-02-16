import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTiffinsComponent } from './food-tiffins.component';

describe('FoodTiffinsComponent', () => {
  let component: FoodTiffinsComponent;
  let fixture: ComponentFixture<FoodTiffinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodTiffinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodTiffinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
