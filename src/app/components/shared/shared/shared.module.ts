import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppDynamicComponent } from '../../app-dynamic/app-dynamic.component';
import { AppMenuComponent } from '../../app-menu/app-menu.component';
import { FormsModule } from '@angular/forms';

import { AppAsideComponent } from '../../app-aside/app-aside.component';
import { AppSettingsControlsComponent } from '../../app-settings-controls/app-settings-controls.component';
import { AppFooterComponent } from '../../app-footer/app-footer.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { AppHomeComponent } from '../../app-home/app-home.component';
import { AppFirstComponent } from '../../app-first/app-first.component';
import { AppSecondComponent } from '../../app-second/app-second.component';
import { AppSettingsComponent } from '../../app-settings/app-settings.component';
import { NumpadKeboardComponent } from '../../numpad-keboard/numpad-keboard.component';
import { AppPickerComponent } from '../../app-picker/app-picker.component';

@NgModule({
  declarations: [
    AppDynamicComponent,
    AppMenuComponent,
    AppHomeComponent,
    AppFirstComponent,
    AppSecondComponent,
    AppFooterComponent,
    AppSettingsComponent,
    AppAsideComponent,
    AppSettingsControlsComponent,
    NumpadKeboardComponent,
    AppPickerComponent
  ],

  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule

  ],
  entryComponents: [
    AppSettingsControlsComponent,
    AppMenuComponent
  ],
  exports: [
    RouterModule,
    FormsModule,
    CommonModule,
    AppDynamicComponent,
    AppMenuComponent,
    AppFooterComponent,
    AppAsideComponent,
    AppSettingsControlsComponent,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    NumpadKeboardComponent,
    AppPickerComponent
  ],
})
export class SharedModule { }
