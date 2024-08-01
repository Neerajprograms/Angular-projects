import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodIceComponent } from './food-ice.component';

describe('FoodIceComponent', () => {
  let component: FoodIceComponent;
  let fixture: ComponentFixture<FoodIceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodIceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodIceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
