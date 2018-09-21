import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, PathNotFoundComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent, PathNotFoundComponent]
})
export class LayoutModule {}
