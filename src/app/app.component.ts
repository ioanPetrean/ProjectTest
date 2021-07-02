import { Component, OnInit } from '@angular/core';

import { SharedService } from './components/shared/shared/shared.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProjectTest';

  constructor(private Service: SharedService){

  }
  ngOnInit() {
  
  }


}
