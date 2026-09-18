import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-view-teachers-section',
  templateUrl: './view-teachers-section.component.html',
  styleUrl: './view-teachers-section.component.css'
})
export class ViewTeachersSectionComponent {

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
