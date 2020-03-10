import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeadingComponent } from './heading/heading.component';
import { IconsComponent } from './icons/icons.component';
import { LandingButtonsComponent } from './landing-buttons/landing-buttons.component';
import { ScrolldownComponent } from './scrolldown/scrolldown.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeadingComponent, IconsComponent, LandingButtonsComponent, ScrolldownComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
