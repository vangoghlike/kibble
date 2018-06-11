import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { KibbleComponent } from './kibble.component';

describe('Comoponent: Kibble', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [KibbleComponent],
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(KibbleComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
