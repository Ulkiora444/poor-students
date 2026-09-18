import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-view-students-section',
  templateUrl: './view-students-section.component.html',
  styleUrl: './view-students-section.component.css'
})
export class ViewStudentsSectionComponent {

  search: string = '';

  students: any;
  faculties_find_students: any;

  constructor(private appService: AppService){
    this.reserve();
  }

  isSearch(name: string){
    if(this.search=='' || name.toLowerCase().indexOf(this.search.toLowerCase())!=-1){
      return true;
    }
    return false;
  }

  searchFaculties(id: number){
    this.appService.getFilterFacultiesStudents(id).subscribe((data: any) => {
      if(data.success){
        this.students = data.datas;
      }
    })
  }

  searchGroups(id: number){
    this.appService.getFilterGroupsStudents(id).subscribe((data: any) => {
      if(data.success){
        this.students = data.datas;
      }
    })
  }

  getLengthAllFacultiesStudents(i: any){
    let count = 0;
    for(let j of i){
        count += j.students.length;
    }
    return count;
  }

  getLengthAllStudents(){
    let count = 0;
    for(let  i of this.faculties_find_students){
        for(let f of i.groups){
          count += f.students.length;
        }
    }
    return count;
  }

  reserve(){
    this.appService.getStudents().subscribe((data: any) => {
      if(data.success){
        this.students = data.datas;
      }
    })

    this.appService.getFindStudentsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_students = data.datas;
      }
    })
  }
}
