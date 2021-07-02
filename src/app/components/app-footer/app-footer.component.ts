import { Component, OnInit } from '@angular/core';
import { CopyrightPageComponent } from '../copyright-page/copyright-page.component';
import { FooterService } from './app-footer.service';


@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent {
  service: FooterService;

  constructor(private fs: FooterService) {
    this.service   = fs;
   }



}
