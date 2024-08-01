import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHeadarComponent } from './food-headar.component';

describe('FoodHeadarComponent', () => {
  let component: FoodHeadarComponent;
  let fixture: ComponentFixture<FoodHeadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodHeadarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodHeadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
