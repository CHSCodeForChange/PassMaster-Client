import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDashComponent} from "./admin-dash/admin-dash.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./routing-gaurds/LoginGuard";
import {AdministratorGuard} from "./routing-gaurds/AdministratorGuard";

const routes: Routes = [
  //{ path: '', redirectTo: 'login'}, //this is just a default will change later
  { path: 'admin-dash', component: AdminDashComponent, canActivate: [LoginGuard, AdministratorGuard] },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
