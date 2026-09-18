import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-create-ratings-section',
  templateUrl: './create-ratings-section.component.html',
  styleUrl: './create-ratings-section.component.css'
})
export class CreateRatingsSectionComponent {

  ratingMas: any = [2,3,4,5];
  journals: any;
  students: any;

  rating: number = -1;
  journalId: number = -1;
  studentsId: number = -1;

  constructor(private appService: AppService){
    this.reverse();
  }

  postRating(){
    if(
      this.rating != -1 &&
      this.journalId != -1 &&
      this.studentsId != -1
    ){
      let obj = {
        rating: this.rating,
        journalId: this.journalId,
        studentsId: this.studentsId
      }

      this.appService.postRating(obj).subscribe((data: any) => {
        if(data.success){
          this.rating = -1;
          this.journalId = -1;
          this.studentsId = -1;
          this.reverse();
        }
      })
    }
  }

  reverse(){
    this.appService.getJournal().subscribe((data: any) => {
      if(data.success){
        this.journals = data.datas
      }
    })

    this.appService.getStudents().subscribe((data: any) => {
      if(data.success){
        this.students = data.datas
      }
    })
  }
}
