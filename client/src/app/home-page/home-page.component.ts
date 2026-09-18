import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private appService: AppService){
  }

  
  getIndexNavHomeRouter(){
    return Number(this.appService.getIndexNavHomeRouter());
  }

  setIndexNavHomeRouter(index: number){
    return this.appService.setIndexNavHomeRouter(String(index));
  }

  deleteAll(){
    this.appService.deleteAll().subscribe((data: any) => {
      if(data.success){

      }
    })
  }
}
