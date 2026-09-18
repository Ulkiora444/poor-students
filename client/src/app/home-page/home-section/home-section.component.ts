import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {

  indexHomeRouter: number = 0;

  datas: any;

  constructor(private appService: AppService){
    this.reverse();
  }

  setIndexNavHomeRouter(index: number){
    return this.appService.setIndexNavHomeRouter(String(index));
  }

  reverse(){
    this.appService.getDatas().subscribe((data: any) => {
      if(data.success){
        this.datas = data.datas;
      }
    })
  }

}
