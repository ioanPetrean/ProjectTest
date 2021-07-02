import { Component, OnInit } from '@angular/core';
import { FooterService } from '../app-footer/app-footer.service';
import { AppSettingsControlsComponent } from '../app-settings-controls/app-settings-controls.component';

@Component({
  selector: 'app-settings',
  templateUrl: 'app-settings.component.html',
  styleUrls: ['./app-settings.component.scss']
})
export class AppSettingsComponent implements OnInit {
  constructor(private fs: FooterService) {
    this.fs.setDynamic({
      component: AppSettingsControlsComponent
    });
  }

  ngOnInit() {
  }

}
