import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-update-students-section',
  templateUrl: './update-students-section.component.html',
  styleUrl: './update-students-section.component.css'
})
export class UpdateStudentsSectionComponent {

  modalUpdate: boolean = false;

  search: string = '';

  students: any;
  groups: any;
  faculties_find_students: any;

  name: string = '';
  groupsId: number = -1;
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

  checkObj(obj: any){
    this.obj = Object.assign({}, obj);
    this.name = this.obj.name;
    this.groupsId = this.obj.groupsId;
    this.modalUpdate = true;
  }

  putStudent(){
    if(
      this.name != '' &&
      this.groupsId != -1
    ){
      let obj = {
        id: this.obj.id,
        name: this.name,
        groupsId: this.groupsId  
      }

      this.appService.putStudent(obj).subscribe((data: any) => {
        if(data.success){
          this.reserve();
        }
      })
    }
  }

  reserve(){
    this.appService.getStudents().subscribe((data: any) => {
      if(data.success){
        this.students = data.datas;
      }
    });

    this.appService.getGroups().subscribe((data: any) => {
      if(data.success){
        this.groups = data.datas;
      }
    });

    this.appService.getFindStudentsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_students = data.datas;
      }
    })
  }
}
