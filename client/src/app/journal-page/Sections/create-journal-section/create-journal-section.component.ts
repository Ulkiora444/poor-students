import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-create-journal-section',
  templateUrl: './create-journal-section.component.html',
  styleUrl: './create-journal-section.component.css'
})
export class CreateJournalSectionComponent {

  semestrMas: number[] = [1,2,3,4,5];
  groups: any;
  teachers: any;
  subjects: any;

  groupsId: number = -1;
  teachersId: number = -1;
  subjectsId: number = -1;

  constructor(private appService: AppService){
    this.reserve()
  }

  postJournal(){
    if(
      this.groupsId != -1 &&
      this.teachersId != -1 &&
      this.subjectsId != -1
    ){
      let obj = {
        groupsId: this.groupsId,
        teachersId: this.teachersId,
        subjectsId: this.subjectsId,
      }

      this.appService.postJournal(obj).subscribe((data: any) => {
        if(data.success){
          this.groupsId = -1;
          this.teachersId = -1;
          this.subjectsId = -1;     
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

    this.appService.getTeachers().subscribe((data: any) => {
      if(data.success){
        this.teachers = data.datas;
      }
    })

    this.appService.getSubjects().subscribe((data: any) => {
      if(data.success){
        this.subjects = data.datas;
      }
    })
  }
}
