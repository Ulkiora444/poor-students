import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrl: './teachers-page.component.css'
})
export class TeachersPageComponent {

  constructor(private appService: AppService){}

  getIndexSubRouter(){
    return this.appService.subRouterIndex;
  }
}
