import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AboutComponent,
  MessagesComponent,
  PathNotFoundComponent,
  AuthGuard,
  AuthService,
  MessagesService
} from '.';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent, PathNotFoundComponent, MessagesComponent],
  providers: [AuthGuard, AuthService, MessagesService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        `CoreModule is already loaded. Import it in the AppModule only.`
      );
    }
  }
}
