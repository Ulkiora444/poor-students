import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-delete-teachers-section',
  templateUrl: './delete-teachers-section.component.html',
  styleUrl: './delete-teachers-section.component.css'
})
export class DeleteTeachersSectionComponent {

  search: string = '';

  teachers: any;
  faculties_find_teachers: any;

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
    this.appService.getFilterFacultiesTeachers(id).subscribe((data: any) => {
      if(data.success){
        this.teachers = data.datas;
      }
    })
  }

  searchDepartments(id: number){
    this.appService.getFilterDepartmentsTeachers(id).subscribe((data: any) => {
      if(data.success){
        this.teachers = data.datas;
      }
    })
  }

  getLengthAllDepartmentsTeachers(i: any){
    let count = 0;
    for(let j of i){
      count += j.teachers.length;
    }
    return count;
  }

  getLengthAllTeachers(){
    let count = 0;
    for(let  i of this.faculties_find_teachers){
      for(let j of i.departments){
        count += j.teachers.length;
      }
    }
    return count;
  }

  deleteTeacher(id: number){
    this.appService.deleteTeacher(id).subscribe((data: any) => {
      if(data.success){
        this.teachers = data.datas;
        this.reserve();
      }
    })
  }

  reserve(){
    this.appService.getTeachers().subscribe((data: any) => {
      if(data.success){
        this.teachers = data.datas;
      }
    })

    this.appService.getFindTeachersFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_teachers = data.datas;
      }
    })
  }
}
