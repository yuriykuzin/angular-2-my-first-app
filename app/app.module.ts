import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MySliderComponent } from './slider.component';
import { MyOutputsComponent } from './outputs.component';
import { MySelectComponent } from './select.component';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule ],
  declarations: [ AppComponent, 
                  MySliderComponent, 
                  MyOutputsComponent, 
                  MySelectComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/