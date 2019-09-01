import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-rating',
  templateUrl: './food-rating.component.html',
  styleUrls: ['./food-rating.component.scss'],
})
export class FoodRatingComponent implements OnInit {
  rating = 5;
  constructor() {}

  ngOnInit() {}
}
