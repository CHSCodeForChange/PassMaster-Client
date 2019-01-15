import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {PassmasterService} from "../services/passmaster.service";
import {User} from "../classes/User";

//import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private passmaster: PassmasterService) {
  }

  ngOnInit() {
    // Go to library if they are logged in
    if (this.authService.loggedIn()) {
      this.router.navigate(['admin-dash']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin-dash';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      if (this.loginForm.controls.username.errors.required) {
        console.log('username required');
      }
      if (this.loginForm.controls.password.errors.required) {
        console.log('password is required');
      }
      return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log('we passed the first hurdle');
          this.router.navigate([this.returnUrl]);
          this.passmaster.getUser()
            .subscribe(user => {
              console.log('all of the login stuff is complete', user.type, user);
              localStorage.setItem('user_type', user.type);
            });
        });
  }

}

