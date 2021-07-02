import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FooterService } from '../app-footer/app-footer.service';
import { AppSettingsControlsComponent } from '../app-settings-controls/app-settings-controls.component';
import { CopyrightPageComponent } from '../copyright-page/copyright-page.component';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']

})
export class AppMenuComponent implements AfterViewInit {
  
  constructor(){

  }
  ngAfterViewInit(): void {

  }

 
}
