import { Component } from '@angular/core';
import { EmsService } from '../ems.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  emp: any ={}
  constructor(private empService : EmsService){

  }

  add(emp: any){
    this.empService.addEmp(emp).subscribe(emp)
    alert("Employee added successfully!")
  }
}
