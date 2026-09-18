import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-delete-groups-section',
  templateUrl: './delete-groups-section.component.html',
  styleUrl: './delete-groups-section.component.css'
})
export class DeleteGroupsSectionComponent {

  search: string = '';

  groups: any;
  faculties_find_groups: any;

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
  
  deleteGroups(id: number){
    this.appService.deleteGroup(id).subscribe((data: any) => {
      if(data.success){
        this.groups = data.datas;
        this.reserve();
      }
    })
  }

  reserve(){
    this.appService.getGroups().subscribe((data: any) => {
      if(data.success){
        this.groups = data.datas;
      }
    })

    this.appService.getFindGroupsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_groups = data.datas;
      }
    })
  }
}
