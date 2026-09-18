import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-view-departments-section',
  templateUrl: './view-departments-section.component.html',
  styleUrl: './view-departments-section.component.css'
})
export class ViewDepartmentsSectionComponent {

  search: string = '';

  departments: any;
  faculties_find_departments: any;

  constructor(private appService: AppService){
    this.reserve();
  }

  isSearch(name: string){
    if(this.search=='' || name.toLowerCase().indexOf(this.search.toLowerCase())!=-1){
      return true;
    }
    return false;
  }

  getLengthAllDepartments(){
    let count = 0;
    for(let  i of this.faculties_find_departments){
      count += i.departments.length;
    }
    return count;
  }

  searchFaculties(facultiesId: number){
    this.appService.getFilterFacultiesDepartments(facultiesId).subscribe((data: any) => {
      if(data.success){
        this.departments = data.datas;
      }
    })
  }

  reserve(){
    this.appService.getDepartments().subscribe((data: any) => {
      if(data.success){
        this.departments = data.datas;
      }
    });

    this.appService.getFindDepartmentsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_departments = data.datas;
      }
    })
  }
}
