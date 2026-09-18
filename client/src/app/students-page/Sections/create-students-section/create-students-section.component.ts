import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-create-students-section',
  templateUrl: './create-students-section.component.html',
  styleUrl: './create-students-section.component.css'
})
export class CreateStudentsSectionComponent {

  groups: any;

  name: string = '';
  groupsId: number = -1;

  constructor(private appService: AppService){
    this.reserve();
  }

  postStudent(){
    if(
      this.name != '' && 
      this.groupsId != -1
    ){  
      let obj = {
        name: this.name,
        groupsId: this.groupsId
      }

      this.appService.postStudent(obj).subscribe((data: any) => {
        if(data.success){
          this.name = '';
          this.groupsId = -1;
        }
      })
    }
  }

  reserve(){
    this.appService.getGroups().subscribe((data: any) => {
      if(data.success){
        this.groups = data.datas;
      }
    });
  }
}
