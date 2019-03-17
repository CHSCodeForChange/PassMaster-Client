import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDashComponent} from "./admin-dash/admin-dash.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./routing-gaurds/LoginGuard";
import {AdministratorGuard} from "./routing-gaurds/AdministratorGuard";
import {StudentDashComponent} from "./student-dash/student-dash.component";
import {StudentGuard} from "./routing-gaurds/StudentGuard";

const routes: Routes = [
  //{ path: '', redirectTo: 'login'}, //this is just a default will change later
  { path: 'admin-dash', component: AdminDashComponent, canActivate: [LoginGuard, AdministratorGuard] },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student-dash', component: StudentDashComponent, canActivate: [LoginGuard, StudentGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
