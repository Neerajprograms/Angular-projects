import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBiryanisComponent } from './food-biryanis.component';

describe('FoodBiryanisComponent', () => {
  let component: FoodBiryanisComponent;
  let fixture: ComponentFixture<FoodBiryanisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodBiryanisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodBiryanisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
