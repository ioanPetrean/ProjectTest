import { Component, OnInit } from '@angular/core';
import { AppAsideComponent } from '../app-aside/app-aside.component';
import { AsideService } from '../app-aside/app-aside.service';
import { FooterService } from '../app-footer/app-footer.service';
import { AppPickerComponent } from '../app-picker/app-picker.component';
import { NumpadKeboardComponent } from '../numpad-keboard/numpad-keboard.component';

@Component({
  selector: 'app-first',
  templateUrl: './app-first.component.html',
  styleUrls: ['./app-first.component.css']
})
export class AppFirstComponent implements OnInit {

  constructor(private fs: AsideService) {
  }

  ngOnInit() {
  }
  focusFunction(S :string){
    if(S=='numpad'){
      this.fs.setDynamic({
        component: NumpadKeboardComponent
      });
    }else{
      this.fs.setDynamic({
        component: AppPickerComponent
      });
    }
  }
}
