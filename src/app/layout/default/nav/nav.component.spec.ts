import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { NavigationComponent } from './nav.component';

describe('Layout: Navigation', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [NavigationComponent],
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
