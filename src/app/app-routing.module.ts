import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';



import { AppFirstComponent } from './components/app-first/app-first.component';

import { AppSecondComponent } from './components/app-second/app-second.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppDynamicComponent } from './components/app-dynamic/app-dynamic.component';
import { AppSettingsComponent } from './components/app-settings/app-settings.component';
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: AppHomeComponent
            },

            {
                path: 'settings',
                component: AppSettingsComponent,
                children: [
 
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'first'
                    },
                    {
                        path: 'first',
                        component: AppFirstComponent
                    },
                    {
                        path: 'second',
                        component: AppSecondComponent,

                    },


                ]
            },



            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ])
    ],

    exports: [RouterModule]

})
export class AppRoutingModule { }
