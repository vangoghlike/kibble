import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { FooterComponent } from './footer.component';

describe('Layout: Footer', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [FooterComponent],
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
