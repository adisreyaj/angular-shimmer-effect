import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shimmer',
  templateUrl: './shimmer.component.html',
  styleUrls: ['./shimmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShimmerComponent {
  @Input() type: 'line' | 'square' | 'circle' = 'line';
  @Input() width = '80%';
  @Input() height = '12px';
  @Input() rounded = false;

  getHeight(): string {
    if (this.type === 'circle' || this.type === 'square') {
      return this.width;
    }
    return this.height;
  }

  getBorderRadius(): '50%' | '0px' | '3em' {
    if (this.type === 'circle') {
      return '50%';
    }
    if (this.type === 'square') {
      return '0px';
    }
    if (this.rounded) {
      return '3em';
    }
    return '0px';
  }
}
