import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SpinnerComponent } from '.';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SpinnerComponent],
  exports: [FormsModule, SpinnerComponent]
})
export class SharedModule {}
