import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-create-teachers-section',
  templateUrl: './create-teachers-section.component.html',
  styleUrl: './create-teachers-section.component.css'
})
export class CreateTeachersSectionComponent {

  name: string = '';
  departmentsId: number = -1;
  departments: any;

  constructor(private appService: AppService){
    this.reserve();
  }

  postTeacher(){
    if(
      this.name != '' &&
      this.departmentsId != -1 
    ){
      let obj = {
        name: this.name,
        departmentsId: this.departmentsId,
      }

      this.appService.postTeacher(obj).subscribe((data: any) => {
        if(data.success){
          this.name = '';
          this.departmentsId = -1;
        }
      })
    }
  }

  reserve(){
    this.appService.getDepartments().subscribe((data: any) => {
      if(data.success){
        this.departments = data.datas;
      }
    });
  }
}
