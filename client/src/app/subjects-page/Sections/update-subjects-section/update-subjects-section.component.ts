import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-update-subjects-section',
  templateUrl: './update-subjects-section.component.html',
  styleUrl: './update-subjects-section.component.css'
})
export class UpdateSubjectsSectionComponent {

  modalUpdate: boolean = false;

  search: string = '';

  subjects: any;

  name: string = '';
  obj: any;
  departmentsId: number = -1;
  departments: any;

  constructor(private appService: AppService){
    this.reserve();
  }

  isSearch(name: string){
    if(this.search=='' || name.toLowerCase().indexOf(this.search.toLowerCase())!=-1){
      return true;
    }
    return false;
  }

  checkObj(obj: any){
    this.obj = Object.assign({}, obj);
    this.name = this.obj.name;
    this.departmentsId = this.obj.departmentsId;
    this.modalUpdate = true;
  }

  putSubject(){
    if(
      this.name != '' &&
      this.departmentsId != -1
    ){
      this.obj.name = this.name;
      this.obj.departmentsId = this.departmentsId;
      this.appService.putSubject(this.obj).subscribe((data: any) => {
        if(data.success){
          this.reserve()
        }
      })
    }
  }

  reserve(){
    this.appService.getSubjects().subscribe((data: any) => {
      if(data.success){
        this.subjects = data.datas;
      }
    })

    this.appService.getDepartments().subscribe((data: any) => {
      if(data.success){
        this.departments = data.datas;
      }
    })
  }
}
