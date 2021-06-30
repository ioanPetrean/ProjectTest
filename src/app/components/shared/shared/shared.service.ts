import { ComponentFactoryResolver, ComponentRef, Injectable, Input, ViewChild, ViewContainerRef } from '@angular/core';
export interface DynamicModel {
    component: any;
  }
  @Injectable({
    providedIn: 'root',
  })
export class SharedService {
    currentUser: DynamicModel | null;


    componentRef: ComponentRef<any>;
    @ViewChild('host', { static: false }) host: ViewContainerRef;
   
    @Input() set data(value: DynamicModel) {
      if(value){
  
        this.loadComponent(value);
      }
    }
  
  
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
    loadComponent(data: DynamicModel) {
      console.log(data);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(data.component);
      this.host.clear();
      this.componentRef = this.host.createComponent(componentFactory);
    }




}
