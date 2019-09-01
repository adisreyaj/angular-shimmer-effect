import { NgModule } from '@angular/core';
import { ShimmerComponent } from './shimmer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ShimmerComponent],
  imports: [CommonModule],
  exports: [ShimmerComponent],
})
export class ShimmerModule {}
