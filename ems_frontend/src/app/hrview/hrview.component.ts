import { Component } from '@angular/core';
import { EmsService } from '../ems.service';

@Component({
  selector: 'app-hrview',
  templateUrl: './hrview.component.html',
  styleUrls: ['./hrview.component.css']
})
export class HrviewComponent {
  emp: any = []
  constructor(private empService : EmsService){
    this.empService.getEmp().subscribe((data)=>{
      this.emp = data
    },(err)=>{
      console.log("Cannot get employees...");
    })
  }

  delete(emp: any){
    this.empService.deleteEmp(emp).subscribe(emp)
    alert("Employee deleted successfully!")
    location.reload()
  }
}
