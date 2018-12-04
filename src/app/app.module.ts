import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './services/authentication.service';
import {StudentService} from './services/student.service';
import {AdminDashComponent} from "./admin-dash/admin-dash.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    AuthenticationService,
    StudentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

