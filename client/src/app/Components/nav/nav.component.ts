import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private appService: AppService){}

  getIndexRouter(){
    return this.appService.routerIndex;
  }

  getIndexSubRouter(){
    return this.appService.subRouterIndex;
  }

  setRouter(indexRouter: number, indexSubRouter: number){
    this.appService.setRouterIndex(String(indexRouter))
    if(indexSubRouter!=-1){
      this.appService.setSubRouterIndex(String(indexSubRouter))
    }else{
      this.appService.setSubRouterIndex('0');
    }
  }
}
