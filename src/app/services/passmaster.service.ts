import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs/index';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../classes/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {print} from "util";
import {Pass} from "../classes/Pass";

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

  getPasses(): Observable<Pass[]> {
    var httpOptions = {
      headers: new HttpHeaders(
        {'Authorization': localStorage.getItem('Authorization')}
      )
    };
    return this.http.get<Pass[]>(this.apiUrl + 'passes/', httpOptions);
  }

  getActivePasses(): Observable<Pass[]> {
    var httpOptions = {
      headers: new HttpHeaders(
        {'Authorization': localStorage.getItem('Authorization')}
      )
    };
    return this.http.get<Pass[]>(this.apiUrl + 'passes/?list=active', httpOptions);
  }

  getOldPasses(): Observable<Pass[]> {
    var httpOptions = {
      headers: new HttpHeaders(
        {'Authorization': localStorage.getItem('Authorization')}
      )
    };
    return this.http.get<Pass[]>(this.apiUrl + 'passes/?list=student-old', httpOptions);
  }

  getPendingPasses(): Observable<Pass[]> {
    var httpOptions = {
      headers: new HttpHeaders(
        {'Authorization': localStorage.getItem('Authorization')}
      )
    };
    return this.http.get<Pass[]>(this.apiUrl + 'passes/?list=pending', httpOptions);
  }
}
