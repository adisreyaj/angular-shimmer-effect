import { NgModule } from '@angular/core';
import { ShimmerComponent } from './shimmer.component';
import { CommonModule } from '@angular/common';
import { ShimmerBorderRadiusPipe, ShimmerHeightPipe } from "./shimmer.pipe";

@NgModule({
  declarations: [ShimmerComponent, ShimmerBorderRadiusPipe, ShimmerHeightPipe],
  imports: [CommonModule],
  exports: [ShimmerComponent],
})
export class ShimmerModule {}
