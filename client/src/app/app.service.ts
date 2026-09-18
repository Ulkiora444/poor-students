import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService{

  protocol: string = 'http://';
  ip: string = 'localhost';
  port: string = '3000';

  public routerIndex: number = Number(this.getRouterIndex());
  public subRouterIndex: number = Number(this.getSubRouterIndex());
  static routerIndex: number = Number(AppService.getRouterIndex());
  public indexNavHomeRouter: number = Number(this.getIndexNavHomeRouter())

  constructor(private http: HttpClient){}

  private getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
  }

  static getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = `expires=${d.toUTCString()}`;
    let cpath:string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  static setCookie(name: string, value: string, expireDays: number, path: string = '') {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = `expires=${d.toUTCString()}`;
    let cpath:string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }


  // ---------------------------------------------------------------------------------------------------------

  static getRouterIndex(){
    if(AppService.getCookie("routerIndex")){
      return AppService.getCookie('routerIndex');
    }else{
      AppService.setCookie("routerIndex", '0', 1, '/');
      return 0;
    }
  }

  getRouterIndex(){
    if(this.getCookie("routerIndex")){
      return this.getCookie('routerIndex');
    }else{
      this.setCookie("routerIndex", '0', 1, '/');
      return 0;
    }
  }

  setRouterIndex(token: string){
    this.setCookie("routerIndex", token, 1, '/');
    this.routerIndex = Number(token);
    AppService.routerIndex = Number(token);
  }

  // ---------------------------------------------------------------------------------------------------------

  getSubRouterIndex(){
    if(this.getCookie("subRouterIndex")){
      return this.getCookie('subRouterIndex');
    }else{
      this.setCookie("subRouterIndex", '0', 1, '/');
      return 0;
    }
  }

  setSubRouterIndex(token: string){
    this.setCookie("subRouterIndex", token, 1, '/');
    this.subRouterIndex = Number(token);
  }

  // ---------------------------------------------------------------------------------------------------------

  getIndexNavHomeRouter(){
    if(this.getCookie("indexNavHomeRouter")){
      return this.getCookie('indexNavHomeRouter');
    }else{
      this.setCookie("indexNavHomeRouter", '-1', 1, '/');
      return 0;
    }
  }

  setIndexNavHomeRouter(token: string){
    this.setCookie("indexNavHomeRouter", token, 1, '/');
    this.indexNavHomeRouter = Number(token);
  }
  

  // -------------------------------------------------------------------------------------------

  getStudents(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/students`, {
    });
  }

  getFilterFacultiesStudents(facultiesId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/students/filter/faculties/${facultiesId}`, {
    });
  }

  getFilterGroupsStudents(groupsId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/students/filter/groups/${groupsId}`, {
    });
  }

  postStudent(obj: any){
    let header = new HttpHeaders();
      return this.http.post(this.protocol+this.ip+":"+this.port+`/students`, obj, {
    });
  }

  putStudent(obj: any){
    let header = new HttpHeaders();
      return this.http.put(this.protocol+this.ip+":"+this.port+`/students`, obj, {
    });
  }

  deleteStudent(id: number){
    let header = new HttpHeaders();
      return this.http.delete(this.protocol+this.ip+":"+this.port+`/students/${id}`, {
    });
  }

  // -------------------------------------------------------------------------------------------

  getSubjects(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/subjects`, {
    });
  }

  postSubject(obj: any){
    let header = new HttpHeaders();
      return this.http.post(this.protocol+this.ip+":"+this.port+`/subjects`, obj, {
    });
  }

  putSubject(obj: any){
    let header = new HttpHeaders();
      return this.http.put(this.protocol+this.ip+":"+this.port+`/subjects`, obj, {
    });
  }

  deleteSubject(id: number){
    let header = new HttpHeaders();
      return this.http.delete(this.protocol+this.ip+":"+this.port+`/subjects/${id}`, {
    });
  }

  // -------------------------------------------------------------------------------------------

  getTeachers(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/teachers`, {
    });
  }

  getFilterFacultiesTeachers(facultiesId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/teachers/filter/faculties/${facultiesId}`, {
    });
  }

  getFilterDepartmentsTeachers(departmentsId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/teachers/filter/departments/${departmentsId}`, {
    });
  }

  postTeacher(obj: any){
    let header = new HttpHeaders();
      return this.http.post(this.protocol+this.ip+":"+this.port+`/teachers`, obj, {
    });
  }

  putTeacher(obj: any){
    let header = new HttpHeaders();
      return this.http.put(this.protocol+this.ip+":"+this.port+`/teachers`, obj, {
    });
  }

  deleteTeacher(id: number){
    let header = new HttpHeaders();
      return this.http.delete(this.protocol+this.ip+":"+this.port+`/teachers/${id}`, {
    });
  }

  // -------------------------------------------------------------------------------------------

  getGroups(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/groups`, {
    });
  }

  getFilterFacultiesGroups(facultiesId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/groups/filter/faculties/${facultiesId}`, {
    });
  }

  getFilterDepartmentsGroups(departmentsId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/groups/filter/departments/${departmentsId}`, {
    });
  }

  postGroup(obj: any){
    let header = new HttpHeaders();
      return this.http.post(this.protocol+this.ip+":"+this.port+`/groups`, obj, {
    });
  }

  putGroup(obj: any){
    let header = new HttpHeaders();
      return this.http.put(this.protocol+this.ip+":"+this.port+`/groups`, obj, {
    });
  }

  deleteGroup(id: number){
    let header = new HttpHeaders();
      return this.http.delete(this.protocol+this.ip+":"+this.port+`/groups/${id}`, {
    });
  }

  // -------------------------------------------------------------------------------------------

  getDepartments(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/departments`, {
    });
  }

  getFilterFacultiesDepartments(facultiesId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/departments/filter/faculties/${facultiesId}`, {
    });
  }

  postDepartment(obj: any){
    let header = new HttpHeaders();
      return this.http.post(this.protocol+this.ip+":"+this.port+`/departments`, obj, {
    });
  }

  putDepartment(obj: any){
    let header = new HttpHeaders();
      return this.http.put(this.protocol+this.ip+":"+this.port+`/departments`, obj, {
    });
  }

  deleteDepartment(id: number){
    let header = new HttpHeaders();
      return this.http.delete(this.protocol+this.ip+":"+this.port+`/departments/${id}`, {
    });
  }

  // -------------------------------------------------------------------------------------------

  getFaculties(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/faculties`, {
    });
  }

  getFindDepartmentsFaculties(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/faculties/find/departments`, {
    });
  }

  getFindTeachersFaculties(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/faculties/find/teachers`, {
    });
  }

  getFindGroupsFaculties(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/faculties/find/groups`, {
    });
  }

  getFindStudentsFaculties(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/faculties/find/students`, {
    });
  }

  getFindJournalsFaculties(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/faculties/find/journals`, {
    });
  }

  postFaculty(obj: any){
    let header = new HttpHeaders();
      return this.http.post(this.protocol+this.ip+":"+this.port+`/faculties`, obj, {
    });
  }

  putFaculty(obj: any){
    let header = new HttpHeaders();
      return this.http.put(this.protocol+this.ip+":"+this.port+`/faculties`, obj, {
    });
  }

  deleteFaculty(id: number){
    let header = new HttpHeaders();
      return this.http.delete(this.protocol+this.ip+":"+this.port+`/faculties/${id}`, {
    });
  }

  // -------------------------------------------------------------------------------------------

  getRatings(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/ratings`, {
    });
  }

  getFilterFacultiesRatings(facultiesId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/ratings/filter/faculties/${facultiesId}`, {
    });
  }
  
  getFilterGroupsRatings(groupsId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/ratings/filter/groups/${groupsId}`, {
    });
  }

  getFindPoorRatings(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/ratings/find/poor`, {
    });
  }

  postRating(obj: any){
    let header = new HttpHeaders();
      return this.http.post(this.protocol+this.ip+":"+this.port+`/ratings`, obj, {
    });
  }

  putRating(obj: any){
    let header = new HttpHeaders();
      return this.http.put(this.protocol+this.ip+":"+this.port+`/ratings`, obj, {
    });
  }

  deleteRating(id: number){
    let header = new HttpHeaders();
      return this.http.delete(this.protocol+this.ip+":"+this.port+`/ratings/${id}`, {
    });
  }

  // -------------------------------------------------------------------------------------------

  getJournal(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/journal`, {
    });
  }

  getGroupsJournal(groupsId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/journal/find/groups/${groupsId}`, {
    });
  }

  getFilterFacultiesJournals(facultiesId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/journal/filter/faculties/${facultiesId}`, {
    });
  }

  getFilterGroupsJournals(groupsId: number){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/journal/filter/groups/${groupsId}`, {
    });
  }

  postJournal(obj: any){
    let header = new HttpHeaders();
      return this.http.post(this.protocol+this.ip+":"+this.port+`/journal`, obj, {
    });
  }

  putJournal(obj: any){
    let header = new HttpHeaders();
      return this.http.put(this.protocol+this.ip+":"+this.port+`/journal`, obj, {
    });
  }

  deleteJournal(id: number){
    let header = new HttpHeaders();
      return this.http.delete(this.protocol+this.ip+":"+this.port+`/journal/${id}`, {
    });
  }

  
  // -------------------------------------------------------------------------------------------

  getDatas(){
    let header = new HttpHeaders();
      return this.http.get(this.protocol+this.ip+":"+this.port+`/datas`, {
    });
  }

  // -------------------------------------------------------------------------------------------

  getPrint(obj: any){
    let header = new HttpHeaders();
    return this.http.post(this.protocol+this.ip+":8000"+`/print-files`, obj, {
    });
  }

  getCheckPrint(obj: any){
    let header = new HttpHeaders();
    return this.http.post(this.protocol+this.ip+":8000"+`/print-files/check`, obj, {
    });
  }

  // -------------------------------------------------------------------------------------------

  getSave(obj: any){
    let header = new HttpHeaders();
    return this.http.post(this.protocol+this.ip+":8000"+`/save-files`, obj, {
    });
  }

  getCheckSave(obj: any){
    let header = new HttpHeaders();
    return this.http.post(this.protocol+this.ip+":8000"+`/save-files/check`, obj, {
    });
  }

  // -------------------------------------------------------------------------------------------

  getExport(){
    let header = new HttpHeaders();
    return this.http.get(this.protocol+this.ip+":8000"+`/save-journal`, {
    });
  }

  getCheckExport(obj: any){
    let header = new HttpHeaders();
    return this.http.post(this.protocol+this.ip+":8000"+`/save-journal/check`, obj, {
    });
  }

  // -------------------------------------------------------------------------------------------

  deleteAll(){
    let header = new HttpHeaders();
    return this.http.delete(this.protocol+this.ip+":"+this.port+`/ratings/delete/all`, {
    });
  }
}
