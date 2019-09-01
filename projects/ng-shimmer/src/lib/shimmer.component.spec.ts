import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerComponent } from './shimmer.component';

describe('NgShimmerComponent', () => {
  let component: ShimmerComponent;
  let fixture: ComponentFixture<ShimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShimmerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getHeight() should return the width if type is circle or square', () => {
    component.type = 'square';
    component.width = '100px';
    component.height = '25px';
    fixture.detectChanges();
    expect(component.getHeight()).toBe('100px');
  });
  it('getHeight() should return the height if its not circle or square', () => {
    component.type = 'line';
    component.width = '100px';
    component.height = '25px';
    fixture.detectChanges();
    expect(component.getHeight()).toBe('25px');
  });
  it('getBorderRadius() should return the Border Radius', () => {
    component.type = 'line';
    component.rounded = true;
    fixture.detectChanges();
    expect(component.getBorderRadius()).toBe('3em');
    component.type = 'circle';
    fixture.detectChanges();
    expect(component.getBorderRadius()).toBe('50%');
    component.type = 'line';
    component.rounded = false;
    fixture.detectChanges();
    expect(component.getBorderRadius()).toBe('0px');
  });
});
