import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { NavbarComponent } from './navigator/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
