import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-create-subjects-section',
  templateUrl: './create-subjects-section.component.html',
  styleUrl: './create-subjects-section.component.css'
})
export class CreateSubjectsSectionComponent {

  name: string = '';
  departmentsId: number = -1;
  teachersId: number = -1;
  departments: any;
  teachers: any;

  constructor(private appService: AppService){
    this.appService.getDepartments().subscribe((data: any) => {
      if(data.success){
        this.departments = data.datas;
      }
    })

    this.appService.getTeachers().subscribe((data: any) => {
      if(data.success){
        this.teachers = data.datas;
      }
    })
  }

  postSubject(){
    if(
      this.name != '' &&
      this.departmentsId != -1
    ){
      let obj = {
        name: this.name,
        departmentsId: this.departmentsId,
        teachersId: this.teachersId==-1?null:this.teachersId
      }

      this.appService.postSubject(obj).subscribe((data: any) => {
        if(data.success){
          this.name = '';
          this.departmentsId = -1;
          this.teachersId = -1;
        }
      })
    }
  }
}
