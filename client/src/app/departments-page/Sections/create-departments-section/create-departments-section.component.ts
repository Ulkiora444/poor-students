import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-create-departments-section',
  templateUrl: './create-departments-section.component.html',
  styleUrl: './create-departments-section.component.css'
})
export class CreateDepartmentsSectionComponent {

  name: string = '';
  facultiesId: number = -1;

  faculties: any;

  constructor(private appService: AppService){
    this.reserve();
  }

  postDepartment(){
    if(
      this.name != '' &&
      this.facultiesId != -1
    ){
      let obj = {
        name: this.name,
        facultiesId: this.facultiesId
      }

      this.appService.postDepartment(obj).subscribe((data: any) => {
        if(data.success){
          this.name = '';
          this.facultiesId = -1;
          this.reserve()
        }
      })
    }
  }

  reserve(){
    this.appService.getFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties = data.datas;
      }
    })
  }
}
