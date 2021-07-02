import { Component, OnInit } from '@angular/core';
import { FooterService } from '../app-footer/app-footer.service';
import { AppPickerComponent } from '../app-picker/app-picker.component';
import { AppSettingsControlsComponent } from '../app-settings-controls/app-settings-controls.component';
import { NumpadKeboardComponent } from '../numpad-keboard/numpad-keboard.component';
import { AsideService } from './app-aside.service';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html',
  styleUrls: ['./app-aside.component.css']
})
export class AppAsideComponent implements OnInit {
  constructor(public fs: AsideService) {

  }

  ngOnInit() {
  }

}
