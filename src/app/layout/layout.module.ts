import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { LayoutDefaultComponent } from './default/default.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
import { HeaderComponent } from './default/header/header.component';
import { NavigationComponent } from './default/nav/nav.component';
import { FooterComponent } from './default/footer/footer.component';

const COMPONENTS = [
  LayoutDefaultComponent,
  LayoutFullScreenComponent,
  HeaderComponent,
  NavigationComponent,
  FooterComponent,
];
// header
const HEADERCOMPONET = [HeaderComponent];
// nav
const NAVIGATIONCOMPONET = [NavigationComponent];
// footer
const FOOTERCOMPONET = [FooterComponent];
// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [LayoutPassportComponent];

@NgModule({
  imports: [SharedModule],
  providers: [],
  declarations: [...COMPONENTS, ...HEADERCOMPONET, ...NAVIGATIONCOMPONET, ...FOOTERCOMPONET, ...PASSPORT],
  exports: [...COMPONENTS, ...PASSPORT],
})
export class LayoutModule {}
