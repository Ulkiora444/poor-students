import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-view-subjects-section',
  templateUrl: './view-subjects-section.component.html',
  styleUrl: './view-subjects-section.component.css'
})
export class ViewSubjectsSectionComponent {

  search: string = '';

  subjects: any;

  constructor(private appService: AppService){
    this.reserve();
  }

  isSearch(name: string){
    if(this.search=='' || name.toLowerCase().indexOf(this.search.toLowerCase())!=-1){
      return true;
    }
    return false;
  }

  reserve(){
    this.appService.getSubjects().subscribe((data: any) => {
      if(data.success){
        console.log(data)
        this.subjects = data.datas;
      }
    })
  }
}
