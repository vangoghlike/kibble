import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '@testing/common.spec';

import { IntroComponent } from './intro.component';

describe('Comoponent: Intro', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [IntroComponent],
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(IntroComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
});
