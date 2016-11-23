import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoAppComponent } from './app.component';

@NgModule({
  declarations: [
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [
  ],
  entryComponents: [TodoAppComponent],
  bootstrap: [TodoAppComponent]
})
export class AppModule {

}
