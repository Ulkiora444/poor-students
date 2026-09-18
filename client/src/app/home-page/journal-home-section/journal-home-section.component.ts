import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-journal-home-section',
  templateUrl: './journal-home-section.component.html',
  styleUrl: './journal-home-section.component.css'
})
export class JournalHomeSectionComponent {

  ratingMas: any = [2,3,4,5];

  groups: any
  groupsId: number =-1;

  journal: any;

  isModalUpdate: boolean = false;

  obj_update: any;

  constructor(private appService: AppService){
    this.appService.getGroups().subscribe((data: any) => {
      if(data.success){
        this.groups = data.datas;
      }
    })
  }

  getRating(id: number, ratings: any, part: number){
    for(let i of ratings){
      if(id==i.journal.teachers.id && part==i.part && i.rating!=-1){
        return i
      }
    }
    return {rating: '-'}
  }

  getTotal(ratings: any){
    if(0!=ratings.length){
      let count = 0;
      for(let i of ratings){
        if(i.rating==-1){
          count += 5;
        }
        count += i.rating;
      }
      let num = count/ratings.length;
      return num.toFixed(1);
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

  openModal(teacher: any, subject: any, student: number, journal: any, rating: any, part: number){
    this.obj_update = {
      teacher: teacher.name,
      subject: subject.name,
      studentsId: student,
      journalId: journal,
      ratingId: rating.id!=undefined?rating.id:-1,
      rating: rating.rating!='-'?rating.rating:-1,
      part: part
    }
    // this.isModalUpdate = true;
  }

  queryRating(){
    if(this.obj_update.ratingId==-1){
      let obj = {
        rating: this.obj_update.rating,
        journalId: this.obj_update.journalId,
        studentsId: this.obj_update.studentsId,
        part: this.obj_update.part
      }
      
      this.appService.postRating(obj).subscribe((data: any) => {
        if(data.success){
          this.changeJournal()
        }
      })
    }
    else{
      let obj = {
        id: this.obj_update.ratingId,
        rating: this.obj_update.rating,
        journalId: this.obj_update.journalId,
        studentsId: this.obj_update.studentsId,
        part: this.obj_update.part
      }

      this.appService.putRating(obj).subscribe((data: any) => {
        if(data.success){
          this.changeJournal()
        }
      })
    }
  }

  onKeydown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const row = +input.getAttribute('data-row')!;
    const col = +input.getAttribute('data-col')!;
    
    let nextRow = row;
    let nextCol = col;

    switch (event.key) {
      case 'ArrowUp':
        nextRow = row - 1;
        break;
      case 'ArrowDown':
        nextRow = row + 1;
        break;
      case 'ArrowLeft':
        nextCol = col - 1;
        break;
      case 'ArrowRight':
        nextCol = col + 1;
        break;
      default:
        return;
    }

    const selector = `input[data-row="${nextRow}"][data-col="${nextCol}"]`;
    const nextInput = document.querySelector(selector) as HTMLInputElement;
    if (nextInput) {
      event.preventDefault();
      nextInput.focus();
    }
  }

  onInput(event: Event, prm: any) {
    const input = event.target as HTMLInputElement;
    const allowed = ['2', '3', '4', '5'];

    const lastChar = input.value.slice(-1);
    prm = this.obj_update;
    prm.rating = lastChar;

    if (allowed.includes(lastChar)) {
      input.value = lastChar;

      if(!prm.id){
        this.appService.postRating(prm).subscribe((data: any) => {
          if(data.success){
            // this.changeJournal()
          }
        })
      }
      else{
        this.appService.putRating(prm).subscribe((data: any) => {
          if(data.success){
            // this.changeJournal()
          }
        })
      }

    } else {
      prm.rating = '-';
      input.value = '';

      if(!prm.id){
        this.appService.postRating(prm).subscribe((data: any) => {
          if(data.success){
            // this.changeJournal()
          }
        })
      }else{
        this.appService.putRating(prm).subscribe((data: any) => {
          if(data.success){
            // this.changeJournal()
          }
        })
      }
    }
  }

  allowOnlySpecificDigits(event: KeyboardEvent) {
    const allowedKeys = ['2', '3', '4', '5'];

    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
