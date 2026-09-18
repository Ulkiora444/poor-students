import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrl: './subjects-page.component.css'
})
export class SubjectsPageComponent {

  constructor(private appService: AppService){}

  getIndexSubRouter(){
    return this.appService.subRouterIndex;
  }
}
