import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShimmerModule } from '@sreyaj/ng-shimmer';
import { UserRatingComponent } from './cards/user-rating/user-rating.component';
import { FoodRatingComponent } from './cards/food-rating/food-rating.component';
import { StarRatingModule } from '@sreyaj/ng-star-rating';
@NgModule({
  declarations: [AppComponent, UserRatingComponent, FoodRatingComponent],
  imports: [BrowserModule, ShimmerModule, StarRatingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
