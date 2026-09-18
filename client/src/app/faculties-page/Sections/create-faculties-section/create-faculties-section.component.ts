import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-create-faculties-section',
  templateUrl: './create-faculties-section.component.html',
  styleUrl: './create-faculties-section.component.css'
})
export class CreateFacultiesSectionComponent {

  name: string = '';

  constructor(private appService: AppService){}

  postFaculty(){
    if(
      this.name != ''
    ){
      let obj = {
        name: this.name
      }

      this.appService.postFaculty(obj).subscribe((data: any) => {
        if(data.success){
          this.name = '';
        }
      })
    }
  }
}
