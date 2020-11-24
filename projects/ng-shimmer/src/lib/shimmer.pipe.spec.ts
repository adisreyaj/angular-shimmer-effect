import { ShimmerBorderRadiusPipe, ShimmerHeightPipe } from './shimmer.pipe';

describe('ShimmerBorderRadiusPipe', () => {
  it('create an instance', () => {
    const pipe = new ShimmerBorderRadiusPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('ShimmerHeightPipe', () => {
  it('create an instance', () => {
    const pipe = new ShimmerHeightPipe();
    expect(pipe).toBeTruthy();
  });
});
