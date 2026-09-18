import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-faculties-page',
  templateUrl: './faculties-page.component.html',
  styleUrl: './faculties-page.component.css'
})
export class FacultiesPageComponent {

    constructor(private appService: AppService){}
  
    getIndexSubRouter(){
      return this.appService.subRouterIndex;
    }
}
