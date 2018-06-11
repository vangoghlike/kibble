import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { ApplyComponent } from './apply.component';

describe('Comoponent: Apply', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [ApplyComponent],
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(ApplyComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
