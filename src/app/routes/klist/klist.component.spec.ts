import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { KibbleListComponent } from './klist.component';

describe('Comoponent: Klist', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [KibbleListComponent],
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(KibbleListComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
