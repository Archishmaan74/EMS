import { Component } from '@angular/core';
import { EmsService } from '../ems.service';

@Component({
  selector: 'app-norview',
  templateUrl: './norview.component.html',
  styleUrls: ['./norview.component.css']
})
export class NorviewComponent {
  emp: any = []
  constructor(private empService : EmsService){
    this.empService.getEmp().subscribe((data)=>{
      this.emp = data
    },(err)=>{
      console.log("Cannot get employees...");
    })
  }
}
