import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodChineeseComponent } from './food-chineese.component';

describe('FoodChineeseComponent', () => {
  let component: FoodChineeseComponent;
  let fixture: ComponentFixture<FoodChineeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodChineeseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodChineeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
