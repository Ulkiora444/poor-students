import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-update-teachers-section',
  templateUrl: './update-teachers-section.component.html',
  styleUrl: './update-teachers-section.component.css'
})
export class UpdateTeachersSectionComponent {

  modalUpdate: boolean = false;
  
  search: string = '';
  teachers: any;
  departments: any;
  faculties_find_teachers: any;

  name: string = '';
  departmentsId: number = -1;
  obj: any;

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


  checkObj(obj: any){
    this.obj = Object.assign({}, obj);
    this.name = this.obj.name;
    this.departmentsId = this.obj.departmentsId;
    this.modalUpdate = true;
  }

  putTeacher(){
    if(
      this.name != '' &&
      this.departmentsId != -1
    ){
      let obj = {
        id: this.obj.id,
        name: this.name,
        departmentsId: this.departmentsId
      }

      this.appService.putTeacher(obj).subscribe((data: any) => {
        if(data.success){
          this.reserve()
        }
      })
    }
  }

  reserve(){
    this.appService.getTeachers().subscribe((data: any) => {
      if(data.success){
        this.teachers = data.datas;
      }
    })

    this.appService.getDepartments().subscribe((data: any) => {
      if(data.success){
        this.departments = data.datas;
      }
    })

    this.appService.getFindTeachersFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_teachers = data.datas;
      }
    })
  }
}
