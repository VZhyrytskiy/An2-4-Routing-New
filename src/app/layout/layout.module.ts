import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, PathNotFoundComponent } from '.';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent, PathNotFoundComponent],
  providers: []
})
export class LayoutModule {}
