import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-print-home-section',
  templateUrl: './print-home-section.component.html',
  styleUrl: './print-home-section.component.css'
})
export class PrintHomeSectionComponent {

  indexCheckPrint: number = 0;
  index_students: string = '';
  part: number = -1;
  month: number = 0;
  year: number = 0;

  changedStudents: number[] = [];

  ratings: any;

  months = [
    "Ýanwar",
    "Fewral",
    "Mart",
    "Aprel",
    "Maý",
    "Iýun",
    "Iýul",
    "Awgust",
    "Sentýabr",
    "Oktýabr",
    "Noýabr",
    "Dekabr"
  ]

  constructor(private appService: AppService){
    this.appService.getFindPoorRatings().subscribe((data: any) => {
      if(data.success){
        this.ratings = data.datas;
      }
    })
  }

  getRatings(){
    if(
      this.part == -1
    ){
      return this.ratings;
    }else{
      return this.ratings.filter((r: any) => r.part == this.part)
    }
  }

  inputStudents(){
    try{
      let mas: any = this.index_students.trim().split(',').join(' ').split(' ');
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
      mas = mas.filter((mas: any) => mas<=this.ratings.length);
      mas = [...new Set(mas)]
      this.changedStudents = mas;
    }
    catch{
      this.changedStudents = [];
    }
  }

  isChangedStudents(index: number){
    return this.changedStudents.indexOf(index)!=-1;
  }

  changeStudent(index: number){
    if(this.changedStudents.indexOf(index)==-1){
      this.changedStudents.push(index);
    }
    else{
      this.changedStudents = this.changedStudents.filter((changedStudents) => changedStudents !== index);
    }

  }

  getPrint(){
    if(this.indexCheckPrint==0){
      let mas = {
        year: this.year,
        month: this.month,
      };
      this.appService.getPrint(mas).subscribe((data: any) => {
        if(data.success){
          this.changedStudents = [];
        }
      })
    }
    else if(this.indexCheckPrint==1 || this.indexCheckPrint==2){
      let mas = {
        year: this.year,
        month: this.month,
        index: this.changedStudents.map((ind: any) => this.getRatings()[ind-1].id)
      };

      this.appService.getCheckPrint(mas).subscribe((data: any) => {
        if(data.success){
          this.changedStudents = [];
          this.index_students = '';
        }
      })
    }
  }
}
