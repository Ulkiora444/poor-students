import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { SubjectsPageComponent } from './subjects-page/subjects-page.component';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { RatingsPageComponent } from './ratings-page/ratings-page.component';
import { JournalPageComponent } from './journal-page/journal-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { FacultiesPageComponent } from './faculties-page/faculties-page.component';
import { DepartmentsPageComponent } from './departments-page/departments-page.component';
import { AppService } from './app.service';

const routesNames: string[] = [
  "departments",
  "faculties",
  "groups",
  "journal",
  "ratings",
  "students",
  "subjects",
  "teachers",
  "home",
]

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "departments", component: DepartmentsPageComponent},
  {path: "faculties", component: FacultiesPageComponent},
  {path: "groups", component: GroupsPageComponent},
  {path: "journal", component: JournalPageComponent},
  {path: "ratings", component: RatingsPageComponent},
  {path: "students", component: StudentsPageComponent},
  {path: "subjects", component: SubjectsPageComponent},
  {path: "teachers", component: TeachersPageComponent},
  {path: "", redirectTo: `${routesNames[AppService.routerIndex]}`, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
