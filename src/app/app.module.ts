import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

bootstrapApplication(AppComponent);

@NgModule({
  imports: [
    BrowserModule
  ]
})
export class AppModule { }
