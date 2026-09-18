import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-view-ratings-section',
  templateUrl: './view-ratings-section.component.html',
  styleUrl: './view-ratings-section.component.css'
})
export class ViewRatingsSectionComponent {

  search: string = '';

  faculties_find_ratings: any;
  ratings: any;

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

  reserve(){
    this.appService.getRatings().subscribe((data: any) => {
      if(data.success){
        this.ratings = data.datas;
      }
    })

    this.appService.getFindStudentsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_ratings = data.datas;
      }
    })
  }
}
