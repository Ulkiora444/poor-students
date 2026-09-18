import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-view-journal-section',
  templateUrl: './view-journal-section.component.html',
  styleUrl: './view-journal-section.component.css'
})
export class ViewJournalSectionComponent {

  search: string = '';

  journals: any;
  faculties_find_journals: any;

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
    this.appService.getFilterFacultiesJournals(id).subscribe((data: any) => {
      if(data.success){
        this.journals = data.datas;
      }
    })
  }

  searchGroups(id: number){
    this.appService.getFilterGroupsJournals(id).subscribe((data: any) => {
      if(data.success){
        this.journals = data.datas;
      }
    })
  }
  
  getLengthAllFacultiesJournals(i: any){
    let count = 0;
    for(let j of i){
        count += j.journal.length;
    }
    return count;
  }

  getLengthAllJournals(){
    let count = 0;
    for(let  i of this.faculties_find_journals){
        for(let f of i.groups){
          count += f.journal.length;
        }
    }
    return count;
  }

  reserve(){
    this.appService.getJournal().subscribe((data: any) => {
      if(data.success){
        this.journals = data.datas;
      }
    })

    this.appService.getFindJournalsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_journals = data.datas;
      }
    })
  }

}
