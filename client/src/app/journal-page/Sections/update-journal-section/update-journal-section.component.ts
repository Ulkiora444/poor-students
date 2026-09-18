import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-update-journal-section',
  templateUrl: './update-journal-section.component.html',
  styleUrl: './update-journal-section.component.css'
})
export class UpdateJournalSectionComponent {

  modalUpdate: boolean = false;
  
  search: string = '';

  journals: any;
  faculties_find_journals: any;
  groups: any;
  teachers: any;
  subjects: any;

  groupsId: number = -1;
  teachersId: number = -1;
  subjectsId: number = -1;
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

  checkObj(obj: any){
    this.obj = Object.assign({}, obj);
    this.groupsId = this.obj.groupsId;
    this.teachersId = this.obj.teachersId;
    this.subjectsId = this.obj.subjectsId;
    this.modalUpdate = true;
  }

  putJournal(){
    if(
      this.groupsId != -1 &&
      this.teachersId != -1 &&
      this.subjectsId != -1
    ){
      let obj = {
        id: this.obj.id,
        groupsId: this.groupsId,
        teachersId: this.teachersId,
        subjectsId: this.subjectsId
      }

      this.appService.putJournal(obj).subscribe((data: any) => {
        if(data.success){
          this.reserve()
        }
      })
    }
  }

  reserve(){
    this.appService.getJournal().subscribe((data: any) => {
      if(data.success){
        this.journals = data.datas;
      }
    })

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

    this.appService.getFindJournalsFaculties().subscribe((data: any) => {
      if(data.success){
        this.faculties_find_journals = data.datas;
      }
    })
  }
}
