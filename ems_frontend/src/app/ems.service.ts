import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmsService {

  constructor(private httpClient: HttpClient){

  }

  getEmp(){
    return this.httpClient.get("http://localhost:3000/display")
  }

  getOneEmp(sno: number){
    return this.httpClient.get("http://localhost:3000/dispone/"+sno)
  }

  editEmp(emp: any){
    return this.httpClient.post("http://localhost:3000/edit",emp)
  }

  addEmp(emp: any){
    return this.httpClient.post("http://localhost:3000/add",emp)
  }

  deleteEmp(emp: any){
    return this.httpClient.post("http://localhost:3000/delete",emp)
  }
}
