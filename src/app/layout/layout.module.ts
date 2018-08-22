import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutComponent, PathNotFoundComponent } from '.';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AboutComponent, PathNotFoundComponent, MessagesComponent],
  providers: []
})
export class LayoutModule {}
