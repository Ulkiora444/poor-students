import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-delete-subjects-section',
  templateUrl: './delete-subjects-section.component.html',
  styleUrl: './delete-subjects-section.component.css'
})
export class DeleteSubjectsSectionComponent {

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

  deleteSubject(id: number){
    this.appService.deleteSubject(id).subscribe((data: any) => {
      if(data.success){
        this.subjects = data.datas;
        this.reserve();
      }
    })
  }

  reserve(){
    this.appService.getSubjects().subscribe((data: any) => {
      if(data.success){
        this.subjects = data.datas;
      }
    })
  }
}
