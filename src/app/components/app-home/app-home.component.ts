import { Component, OnInit } from '@angular/core';
import { FooterService } from '../app-footer/app-footer.service';
import { CopyrightPageComponent } from '../copyright-page/copyright-page.component';


@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',

  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {

constructor(private fs: FooterService){
fs.setDynamic({
  component: CopyrightPageComponent
})
}


}
