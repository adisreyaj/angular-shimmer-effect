import { Pipe, PipeTransform } from '@angular/core';
import { ShimmerTypes } from './shimmer.model';

@Pipe({
  name: 'shimmerHeight',
})
export class ShimmerHeightPipe implements PipeTransform {
  transform(type: ShimmerTypes, width: string, height: string): string {
    if ([ShimmerTypes.CIRCLE, ShimmerTypes.SQUARE].includes(type)) {
      return width;
    } else {
      return height;
    }
  }
}
@Pipe({
  name: 'shimmerBorderRadius',
})
export class ShimmerBorderRadiusPipe implements PipeTransform {
  transform(type: ShimmerTypes, rounded = false): string {
    if (rounded) {
      return '3rem';
    } else {
      switch (type) {
        case ShimmerTypes.CIRCLE:
          return '50%';
        case ShimmerTypes.SQUARE:
          return '0px';
        default:
          return '0px';
      }
    }
  }
}
