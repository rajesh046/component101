import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Testcomp1Component } from './testcomp1/testcomp1.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    Testcomp1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
