import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-view-faculties-section',
  templateUrl: './view-faculties-section.component.html',
  styleUrl: './view-faculties-section.component.css'
})
export class ViewFacultiesSectionComponent {

  faculties: any;
  search: string = '';

  constructor(private appService: AppService){
    this.reserve()
  }

  isSearch(name: string){
    if(this.search=='' || name.toLowerCase().indexOf(this.search.toLowerCase())!=-1){
      return true;
    }
    return false;
  }

  reserve(){
    this.appService.getFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties = data.datas;
      }
    })
  }
}
