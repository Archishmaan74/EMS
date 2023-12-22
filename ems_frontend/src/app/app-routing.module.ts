import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NorviewComponent } from './norview/norview.component';
import { HrviewComponent } from './hrview/hrview.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent
  },
  {
    path: "norview", component: NorviewComponent
  },
  {
    path: "hrview", component: HrviewComponent
  },
  {
    path: "**", component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
