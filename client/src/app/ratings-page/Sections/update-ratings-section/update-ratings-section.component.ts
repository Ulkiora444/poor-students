import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-update-ratings-section',
  templateUrl: './update-ratings-section.component.html',
  styleUrl: './update-ratings-section.component.css'
})
export class UpdateRatingsSectionComponent {

  modalUpdate: boolean = false;
  
  search: string = '';

  ratings: any;
  faculties_find_ratings: any;

  ratingMas: any = [2,3,4,5];
  journals: any;
  students: any;

  rating: number = -1;
  journalId: number = -1;
  studentsId: number = -1;
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
    this.rating = this.obj.rating;
    this.journalId = this.obj.journalId;
    this.studentsId = this.obj.studentsId;
    this.modalUpdate = true;
  }

  searchFaculties(id: number){
    this.appService.getFilterFacultiesRatings(id).subscribe((data: any) => {
      if(data.success){
        this.ratings = data.datas;
      }
    })
  }

  searchGroups(id: number){
    this.appService.getFilterGroupsRatings(id).subscribe((data: any) => {
      if(data.success){
        this.ratings = data.datas;
      }
    })
  }

  getLengthAllFacultiesRatings(i: any){
    let count = 0;
    for(let j of i){
        count += j.students.length;
    }
    return count;
  }

  getLengthAllRatings(){
    let count = 0;
    for(let  i of this.faculties_find_ratings){
        for(let f of i.groups){
          count += f.students.length;
        }
    }
    return count;
  }

  putRating(){
    if(
      this.rating != -1 &&
      this.journalId != -1 &&
      this.studentsId != -1
    ){
      let obj = {
        id: this.obj.id,
        rating: this.rating,
        journalId: this.journalId,
        studentsId: this.studentsId
      }
      
      this.appService.putRating(obj).subscribe((data: any) => {
        if(data.success){
          this.reserve();
        }
      })
    }
  }

  reserve(){
    this.appService.getRatings().subscribe((data: any) => {
      if(data.success){
        this.ratings = data.datas;
      }
    });

    this.appService.getJournal().subscribe((data: any) => {
      if(data.success){
        this.journals = data.datas;
      }
    });

    this.appService.getStudents().subscribe((data: any) => {
      if(data.success){
        this.students = data.datas;
      }
    });

    this.appService.getFindStudentsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_ratings = data.datas;
      }
    });
  }
}
