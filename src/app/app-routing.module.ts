import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDashComponent} from "./admin-dash/admin-dash.component";

const routes: Routes = [
  { path: '', redirectTo: '/admin-dash', pathMatch: 'full' }, //this is just a default will change later
  { path: 'admin-dash', component: AdminDashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
