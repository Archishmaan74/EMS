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
}
