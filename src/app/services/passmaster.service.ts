import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs/index';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../classes/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {print} from "util";

@Injectable({
  providedIn: 'root'
})

export class PassmasterService {
  apiUrl = 'https://passmaster.herokuapp.com/rest/';

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<User[]> {
    var httpOptions = { //these needed to be redefined in case the activation token changes
      headers: new HttpHeaders(
        {'Authorization': localStorage.getItem('Authorization')}
      )
    };
    return this.http.get<User[]>(this.apiUrl + 'students/', httpOptions);
  }

  getUser(): Observable<User> {
    var httpOptions = {
      headers: new HttpHeaders(
        {'Authorization': localStorage.getItem('Authorization')}
      )
    };
    return this.http.get<User>(this.apiUrl + 'user/', httpOptions);
  }
}
