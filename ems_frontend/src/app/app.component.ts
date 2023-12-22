import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag: any = false
  constructor(private router: Router){
    this.flag = this.router
  }
  title = 'ems_frontend';
}
