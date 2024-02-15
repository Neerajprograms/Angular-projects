import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBodyComponent } from './food-body.component';

describe('FoodBodyComponent', () => {
  let component: FoodBodyComponent;
  let fixture: ComponentFixture<FoodBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
