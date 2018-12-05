import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

//this might only be able to store one user in local server memory
@Injectable()
export class AuthenticationService {
  url = 'https://passmaster.herokuapp.com/rest/login/';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.url, {username: username, password: password})
      .pipe(map((res: Response) => {
        // login successful if there's a jwt token in the response
        if (res['token']) {
          console.log('we are putting up ',res['token']);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('Authorization', 'Token ' + res['token']);
        }
        return res;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('Authorization');
  }

  loggedIn() {
    return (localStorage.getItem('Authorization') != null);
  }
}
