import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrl: './groups-page.component.css'
})
export class GroupsPageComponent {

    constructor(private appService: AppService){}
  
    getIndexSubRouter(){
      return this.appService.subRouterIndex;
    }
}
