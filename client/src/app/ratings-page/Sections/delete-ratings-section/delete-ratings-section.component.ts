import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-delete-ratings-section',
  templateUrl: './delete-ratings-section.component.html',
  styleUrl: './delete-ratings-section.component.css'
})
export class DeleteRatingsSectionComponent {

  search: string = '';

  ratings: any;
  faculties_find_ratings: any;

  constructor(private appService: AppService){
    this.reserve();
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

  isSearch(name: string){
    if(this.search=='' || name.toLowerCase().indexOf(this.search.toLowerCase())!=-1){
      return true;
    }
    return false;
  }

  deleteRating(id: number){
    this.appService.deleteRating(id).subscribe((data: any) => {
      if(data.success){
        this.reserve()
      }
    })
  }

  reserve(){
    this.appService.getRatings().subscribe((data: any) => {
      if(data.success){
        this.ratings = data.datas;
      }
    });

    this.appService.getFindStudentsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_ratings = data.datas;
      }
    });
  }
}
