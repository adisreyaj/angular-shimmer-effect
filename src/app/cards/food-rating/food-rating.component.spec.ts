import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FoodRatingComponent } from './food-rating.component';

describe('FoodRatingComponent', () => {
  let component: FoodRatingComponent;
  let fixture: ComponentFixture<FoodRatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
