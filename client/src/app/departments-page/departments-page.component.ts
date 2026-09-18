import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-departments-page',
  templateUrl: './departments-page.component.html',
  styleUrl: './departments-page.component.css'
})
export class DepartmentsPageComponent {

  constructor(private appService: AppService){}

  getIndexSubRouter(){
    return this.appService.subRouterIndex;
  }
}
