import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-update-groups-section',
  templateUrl: './update-groups-section.component.html',
  styleUrl: './update-groups-section.component.css'
})
export class UpdateGroupsSectionComponent {

  modalUpdate: boolean = false;

  search: string = '';
  groups: any;
  faculties: any;
  courseMas: number[] = [1,2,3,4,5];
  faculties_find_groups: any;

  name: string = '';
  course: number = -1;
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

  searchFaculties(id: number){
    this.appService.getFilterFacultiesGroups(id).subscribe((data: any) => {
      if(data.success){
        this.groups = data.datas;
      }
    })
  }

  getLengthAllGroups(){
    let count = 0;
    for(let  i of this.faculties_find_groups){
        count += i.groups.length;
   } 
    return count;
  }

  checkObj(obj: any){
    this.obj = Object.assign({}, obj);
    this.name = this.obj.name;
    this.course = this.obj.course;
    this.facultiesId = this.obj.facultiesId;
    this.modalUpdate = true;
  }

  putGroup(){
    if(
      this.name != '' &&
      this.course != -1 &&
      this.facultiesId != -1
    ){
      let obj = {
        id: this.obj.id,
        name: this.name,
        course: this.course,
        facultiesId: this.facultiesId
      }

      this.appService.putGroup(obj).subscribe((data: any) => {
        if(data.success){
          this.reserve()
        }
      })
    }
  }

  reserve(){
    this.appService.getGroups().subscribe((data: any) => {
      if(data.success){
        this.groups = data.datas;
      }
    })

    this.appService.getFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties = data.datas;
      }
    })

    this.appService.getFindGroupsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_groups = data.datas;
      }
    })
  }
}
