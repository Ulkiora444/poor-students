import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-delete-faculties-section',
  templateUrl: './delete-faculties-section.component.html',
  styleUrl: './delete-faculties-section.component.css'
})
export class DeleteFacultiesSectionComponent {
  
  faculties: any;
  search: string = '';

  constructor(private appService: AppService){
    this.reserve();
  }

  isSearch(name: string){
    if(this.search=='' || name.toLowerCase().indexOf(this.search.toLowerCase())!=-1){
      return true;
    }
    return false;
  }

  deleteFaculty(id: number){
    this.appService.deleteFaculty(id).subscribe((data: any) => {
      if(data.success){
        this.reserve()
      }
    })
  }

  reserve(){
    this.appService.getFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties = data.datas;
      }
    })
  }
}
