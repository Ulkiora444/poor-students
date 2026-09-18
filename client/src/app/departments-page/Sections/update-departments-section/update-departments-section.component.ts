import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-update-departments-section',
  templateUrl: './update-departments-section.component.html',
  styleUrl: './update-departments-section.component.css'
})
export class UpdateDepartmentsSectionComponent {

  modalUpdate: boolean = false;

  search: string = '';

  departments: any;
  faculties: any;
  faculties_find_departments: any;

  name: string = '';
  facultiesId: number = -1;
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


  checkObj(obj: any){
    this.obj = Object.assign({}, obj);
    this.name = this.obj.name;
    this.facultiesId = this.obj.facultiesId;
    this.modalUpdate = true;
  }

  putDepartment(){
    if(
      this.name != '' &&
      this.facultiesId != -1
    ){
      let obj = {
        id: this.obj.id,
        name: this.name,
        facultiesId: this.facultiesId
      }

      this.appService.putDepartment(obj).subscribe((data: any) => {
        if(data.success){
          this.reserve()
        }
      })
    }
  }

  reserve(){
    this.appService.getDepartments().subscribe((data: any) => {
      if(data.success){
        this.departments = data.datas;
      }
    })
    this.appService.getFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties = data.datas;
      }
    })
    this.appService.getFindDepartmentsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_departments = data.datas;
      }
    })
  }
}
