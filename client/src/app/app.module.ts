import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './Components/nav/nav.component';
import { DepartmentsPageComponent } from './departments-page/departments-page.component';
import { FacultiesPageComponent } from './faculties-page/faculties-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { JournalPageComponent } from './journal-page/journal-page.component';
import { RatingsPageComponent } from './ratings-page/ratings-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { SubjectsPageComponent } from './subjects-page/subjects-page.component';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { ViewSubjectsSectionComponent } from './subjects-page/Sections/view-subjects-section/view-subjects-section.component';
import { CreateSubjectsSectionComponent } from './subjects-page/Sections/create-subjects-section/create-subjects-section.component';
import { UpdateSubjectsSectionComponent } from './subjects-page/Sections/update-subjects-section/update-subjects-section.component';
import { DeleteSubjectsSectionComponent } from './subjects-page/Sections/delete-subjects-section/delete-subjects-section.component';
import { DeleteTeachersSectionComponent } from './teachers-page/Sections/delete-teachers-section/delete-teachers-section.component';
import { UpdateTeachersSectionComponent } from './teachers-page/Sections/update-teachers-section/update-teachers-section.component';
import { CreateTeachersSectionComponent } from './teachers-page/Sections/create-teachers-section/create-teachers-section.component';
import { ViewTeachersSectionComponent } from './teachers-page/Sections/view-teachers-section/view-teachers-section.component';
import { ViewStudentsSectionComponent } from './students-page/Sections/view-students-section/view-students-section.component';
import { CreateStudentsSectionComponent } from './students-page/Sections/create-students-section/create-students-section.component';
import { UpdateStudentsSectionComponent } from './students-page/Sections/update-students-section/update-students-section.component';
import { DeleteStudentsSectionComponent } from './students-page/Sections/delete-students-section/delete-students-section.component';
import { DeleteGroupsSectionComponent } from './groups-page/Sections/delete-groups-section/delete-groups-section.component';
import { ViewGroupsSectionComponent } from './groups-page/Sections/view-groups-section/view-groups-section.component';
import { CreateGroupsSectionComponent } from './groups-page/Sections/create-groups-section/create-groups-section.component';
import { UpdateGroupsSectionComponent } from './groups-page/Sections/update-groups-section/update-groups-section.component';
import { UpdateFacultiesSectionComponent } from './faculties-page/Sections/update-faculties-section/update-faculties-section.component';
import { CreateFacultiesSectionComponent } from './faculties-page/Sections/create-faculties-section/create-faculties-section.component';
import { ViewFacultiesSectionComponent } from './faculties-page/Sections/view-faculties-section/view-faculties-section.component';
import { DeleteFacultiesSectionComponent } from './faculties-page/Sections/delete-faculties-section/delete-faculties-section.component';
import { DeleteDepartmentsSectionComponent } from './departments-page/Sections/delete-departments-section/delete-departments-section.component';
import { UpdateDepartmentsSectionComponent } from './departments-page/Sections/update-departments-section/update-departments-section.component';
import { CreateDepartmentsSectionComponent } from './departments-page/Sections/create-departments-section/create-departments-section.component';
import { ViewDepartmentsSectionComponent } from './departments-page/Sections/view-departments-section/view-departments-section.component';
import { ViewJournalSectionComponent } from './journal-page/Sections/view-journal-section/view-journal-section.component';
import { CreateJournalSectionComponent } from './journal-page/Sections/create-journal-section/create-journal-section.component';
import { UpdateJournalSectionComponent } from './journal-page/Sections/update-journal-section/update-journal-section.component';
import { DeleteJournalSectionComponent } from './journal-page/Sections/delete-journal-section/delete-journal-section.component';
import { DeleteRatingsSectionComponent } from './ratings-page/Sections/delete-ratings-section/delete-ratings-section.component';
import { UpdateRatingsSectionComponent } from './ratings-page/Sections/update-ratings-section/update-ratings-section.component';
import { CreateRatingsSectionComponent } from './ratings-page/Sections/create-ratings-section/create-ratings-section.component';
import { ViewRatingsSectionComponent } from './ratings-page/Sections/view-ratings-section/view-ratings-section.component';
import { PrintHomeSectionComponent } from './home-page/print-home-section/print-home-section.component';
import { SaveHomeSectionComponent } from './home-page/save-home-section/save-home-section.component';
import { ExportHomeSectionComponent } from './home-page/export-home-section/export-home-section.component';
import { JournalHomeSectionComponent } from './home-page/journal-home-section/journal-home-section.component';
import { HomeSectionComponent } from './home-page/home-section/home-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    DepartmentsPageComponent,
    FacultiesPageComponent,
    GroupsPageComponent,
    JournalPageComponent,
    RatingsPageComponent,
    StudentsPageComponent,
    SubjectsPageComponent,
    TeachersPageComponent,
    HeaderComponent,
    ViewSubjectsSectionComponent,
    CreateSubjectsSectionComponent,
    UpdateSubjectsSectionComponent,
    DeleteSubjectsSectionComponent,
    DeleteTeachersSectionComponent,
    UpdateTeachersSectionComponent,
    CreateTeachersSectionComponent,
    ViewTeachersSectionComponent,
    ViewStudentsSectionComponent,
    CreateStudentsSectionComponent,
    UpdateStudentsSectionComponent,
    DeleteStudentsSectionComponent,
    DeleteGroupsSectionComponent,
    ViewGroupsSectionComponent,
    CreateGroupsSectionComponent,
    UpdateGroupsSectionComponent,
    UpdateFacultiesSectionComponent,
    CreateFacultiesSectionComponent,
    ViewFacultiesSectionComponent,
    DeleteFacultiesSectionComponent,
    DeleteDepartmentsSectionComponent,
    UpdateDepartmentsSectionComponent,
    CreateDepartmentsSectionComponent,
    ViewDepartmentsSectionComponent,
    ViewJournalSectionComponent,
    CreateJournalSectionComponent,
    UpdateJournalSectionComponent,
    DeleteJournalSectionComponent,
    DeleteRatingsSectionComponent,
    UpdateRatingsSectionComponent,
    CreateRatingsSectionComponent,
    ViewRatingsSectionComponent,
    PrintHomeSectionComponent,
    SaveHomeSectionComponent,
    ExportHomeSectionComponent,
    JournalHomeSectionComponent,
    HomeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
