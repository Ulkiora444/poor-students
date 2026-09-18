import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ratings-page',
  templateUrl: './ratings-page.component.html',
  styleUrl: './ratings-page.component.css'
})
export class RatingsPageComponent {

  constructor(private appService: AppService){}

  getIndexSubRouter(){
    return this.appService.subRouterIndex;
  }
}
