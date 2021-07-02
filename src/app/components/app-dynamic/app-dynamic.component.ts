import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppSettingsControlsComponent } from '../app-settings-controls/app-settings-controls.component';
import { AppSettingsComponent } from '../app-settings/app-settings.component';
import { IDynamicService } from './app-dynamic.service';
export interface DynamicModel {
  component: any;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './app-dynamic.component.html',
  styleUrls: ['./app-dynamic.component.css']
})
export class AppDynamicComponent implements AfterViewInit, OnDestroy {
  initialized = false;
  private subsc: Subscription;
  @ViewChild('host', { read: ViewContainerRef, static: false }) host: ViewContainerRef;
  //private _data: DynamicModel;
  
  @Input()
  set service(s: IDynamicService) {
    this.subsc = s.dynamicChange().subscribe((d:DynamicModel) => {
     // if (this.initialized) {
        this.loadComponent(d);
  //    }
    })

  }


  constructor(private cfr: ComponentFactoryResolver) { }
  ngAfterViewInit(): void {
    // this.initialized = true;
    // if (this.data) {
    //   this.loadComponent(this.data);
    // }
  }

  ngOnDestroy(){
    if(this.subsc){
      this.subsc.unsubscribe();
    }
  }
  loadComponent(data: DynamicModel) {
    this.host.clear();
    let resolver = this.cfr.resolveComponentFactory(data.component);
    let componentFactory = this.host.createComponent(resolver);
  }

}
