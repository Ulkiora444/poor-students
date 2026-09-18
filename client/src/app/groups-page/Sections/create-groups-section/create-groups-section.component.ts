import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-create-groups-section',
  templateUrl: './create-groups-section.component.html',
  styleUrl: './create-groups-section.component.css'
})
export class CreateGroupsSectionComponent {

  name: string = '';
  facultiesId: number = -1;
  course: number = -1;
  faculties: any;
  courseMas: number[] = [1,2,3,4,5];

  constructor(private appService: AppService){
    this.reserve();
  }

  postGroup(){
    if(
      this.name != '' &&
      this.facultiesId != -1 &&
      this.course != -1
    ){
      let obj = {
        name: this.name,
        facultiesId: this.facultiesId,
        course: this.course
      }

      this.appService.postGroup(obj).subscribe((data: any) => {
        if(data.success){
          this.name = '';
          this.facultiesId = -1;
          this.course = -1;
        }
      })
    }
  }

  reserve(){
    this.appService.getFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties = data.datas;
      }
    });
  }
}
