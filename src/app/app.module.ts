
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './components/shared/shared/material.module';
import {BrowserModule} from '@angular/platform-browser';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { SharedModule } from './components/shared/shared/shared.module';
import { CopyrightPageComponent } from './components/copyright-page/copyright-page.component';
import { NumpadKeboardComponent } from './components/numpad-keboard/numpad-keboard.component';
import { AppPickerComponent } from './components/app-picker/app-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DemoMaterialModule,
    SharedModule
  ],
  entryComponents: [AppComponent,
    CopyrightPageComponent,
    NumpadKeboardComponent,
    AppPickerComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
