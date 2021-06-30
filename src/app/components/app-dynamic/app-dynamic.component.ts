import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { AppSettingsControlsComponent } from '../app-settings-controls/app-settings-controls.component';
import { AppSettingsComponent } from '../app-settings/app-settings.component';
export interface DynamicModel {
  component: any;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './app-dynamic.component.html',
  styleUrls: ['./app-dynamic.component.css']
})
export class AppDynamicComponent implements AfterViewInit {
  initialized = false;
  @ViewChild('host', { read: ViewContainerRef, static: true }) host: ViewContainerRef;
  @Input()
  set data(v: DynamicModel) {
    if (this.initialized) {
      this.loadComponent(v);
    }
  }

  constructor(private cfr: ComponentFactoryResolver) { }
  ngAfterViewInit(): void {
    this.initialized = true;
    if (this.data) {
      this.loadComponent(this.data);
    }
  }
  loadComponent(data: DynamicModel) {
    let resolver = this.cfr.resolveComponentFactory(data.component);
    let componentFactory = this.host.createComponent(resolver);

  }

}
