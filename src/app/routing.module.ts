import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDashComponent} from "./admin-dash/admin-dash.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  //{ path: '', redirectTo: 'login'}, //this is just a default will change later
  { path: 'admin-dash', component: AdminDashComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
