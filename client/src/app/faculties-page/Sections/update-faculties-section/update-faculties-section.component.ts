import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-update-faculties-section',
  templateUrl: './update-faculties-section.component.html',
  styleUrl: './update-faculties-section.component.css'
})
export class UpdateFacultiesSectionComponent {

  modalUpdate: boolean = false;

  faculties: any;
  search: string = '';

  name: string = '';
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

  checkObj(obj: any){
    this.obj = Object.assign({}, obj);
    this.name = this.obj.name;
    this.modalUpdate = true;
  }

  putFaculty(){
    if(this.name!=''){
      this.obj.name = this.name;
      this.appService.putFaculty(this.obj).subscribe((data: any) => {
        if(data.success){
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
