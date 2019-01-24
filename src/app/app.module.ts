import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './services/authentication.service';
import {PassmasterService} from './services/passmaster.service';
import {AdminDashComponent} from "./admin-dash/admin-dash.component";
import {RoutingModule} from "./routing.module";
import {LoginGuard} from "./routing-gaurds/LoginGuard";
import {AdministratorGuard} from "./routing-gaurds/AdministratorGuard";
import {StudentDashComponent} from './student-dash/student-dash.component';
import {PassCardComponent} from './pass-card/pass-card.component';
import {PassTypeFilter} from "./filters/PassTypeFilter";
import {PassFormComponent} from './pass-form/pass-form.component';
import {StudentGuard} from "./routing-gaurds/StudentGuard";

//import { MaterializeModule } from "angular2-materialize";
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AdminDashComponent,
        StudentDashComponent,
        PassCardComponent,
        PassTypeFilter,
        PassFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RoutingModule,
        //MaterializeModule
    ],
    providers: [
        AuthenticationService,
        PassmasterService,
        LoginGuard,
        StudentGuard,
        AdministratorGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}

