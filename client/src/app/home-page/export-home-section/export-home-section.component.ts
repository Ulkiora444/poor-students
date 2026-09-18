import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-export-home-section',
  templateUrl: './export-home-section.component.html',
  styleUrl: './export-home-section.component.css'
})
export class ExportHomeSectionComponent {

  indexCheckExport: number = 0;

  groups: any
  groupsId: number =-1;

  journal: any;

  changedJournal: number[] = [];
  index_journals: string = '';

  constructor(private appService: AppService){
    this.appService.getGroups().subscribe((data: any) => {
      if(data.success){
        this.groups = data.datas;
      }
    })
  }

  inputJournal(){
    try{
      let mas: any = this.index_journals.trim().split(',').join(' ').split(' ');
      mas = mas.filter((mas: any) => mas !== '');
      
      let ind: any = []
      for(let i of mas){
        if(i.indexOf('-') && Number(i.split('-')[0]) && Number(i.split('-')[1])){
          for(let l = Number(i.split('-')[0]); l<=Number(i.split('-')[1]); l++){
            ind.push(String(l))
          }
        }
      }

      mas = mas.filter((mas: any) => mas.indexOf('-')==-1);
      mas = mas.concat(ind);
      
      mas = mas.map((mas: any) => Number(mas));
      mas = mas.filter((mas: any) => !isNaN(mas));
      mas = mas.filter((mas: any) => mas>0);
      mas = mas.filter((mas: any) => mas<=this.groups.length);
      mas = [...new Set(mas)]

      this.changedJournal = mas;
    }
    catch{
      this.changedJournal = [];
    }
  }

  getRating(id: number, ratings: any){
    for(let i of ratings){
      if(id==i.journal.teachers.id){
        return i
      }
    }
    return {rating: '-'}
  }

  getTotal(ratings: any){
    if(this.journal.header_journal.length==ratings.length){
      let count = 0;
      for(let i of ratings){
        count += i.rating;
      }
      return count/ratings.length;
    }
    return '-';
  }

  changeJournal(){
    this.appService.getGroupsJournal(this.groupsId).subscribe((data: any) => {
      if(data.success){
        this.journal = data.datas;
      }
    })
  }

  isChangedJournal(index: number){
    return this.changedJournal.indexOf(index)!=-1;
  }

  checkJournal(index: number){
    if(this.changedJournal.indexOf(index)==-1){
      this.changedJournal.push(index);
    }
    else{
      this.changedJournal = this.changedJournal.filter((changedJournal) => changedJournal !== index);
    }
  }

  getExport(){
    if(this.indexCheckExport==0){
      this.appService.getExport().subscribe((data: any) => {
        if(data.success){
          this.changedJournal = [];
        }
      })
    }
    else if(this.indexCheckExport==1 || this.indexCheckExport==2){
      let mas = {
        index: this.changedJournal.map((ind: any) => this.groups[ind-1].id)
      };

      this.appService.getCheckExport(mas).subscribe((data: any) => {
        if(data.success){
          this.changedJournal = [];
          this.index_journals = '';
        }
      })
    }
  }
}
