import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ShimmerTypes } from './shimmer.model';

@Component({
  selector: 'shimmer',
  templateUrl: './shimmer.component.html',
  styleUrls: ['./shimmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShimmerComponent {
  @Input() type: ShimmerTypes = ShimmerTypes.LINE;
  @Input() width = '100%';
  @Input() height = '12px';
  @Input() duration = '1s';
  @Input() rounded = false;
}
