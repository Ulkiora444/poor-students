import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.css'
})
export class StudentsPageComponent {

  constructor(private appService: AppService){}

  getIndexSubRouter(){
    return this.appService.subRouterIndex;
  }
}
