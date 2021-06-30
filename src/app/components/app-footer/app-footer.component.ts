import { Component, OnInit } from '@angular/core';
import { AppMenuComponent } from '../app-menu/app-menu.component';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
data = {
  component: AppMenuComponent
}

  constructor() { }

  ngOnInit() {
  }

}
