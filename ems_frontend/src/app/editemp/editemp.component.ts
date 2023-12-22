import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmsService } from '../ems.service';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent {
  emp: any
  constructor(private aRoute: ActivatedRoute, private empService: EmsService){
    aRoute.params.subscribe((data)=>{
      this.empService.getOneEmp(data['sno']).subscribe((data)=>{
        this.emp = data
      },(err)=>{
        console.log("Cannot subscribe one Emp...");
      })
    })
  }

  edit(emp: any){
    this.empService.editEmp(emp).subscribe(emp)
    alert("Edited details of employee!")
  }
}
