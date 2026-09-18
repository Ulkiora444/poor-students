import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-delete-students-section',
  templateUrl: './delete-students-section.component.html',
  styleUrl: './delete-students-section.component.css'
})
export class DeleteStudentsSectionComponent {

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

  deleteStudent(id: number){
    this.appService.deleteStudent(id).subscribe((data: any) => {
      if(data.success){
        this.reserve()
      }
    })
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
