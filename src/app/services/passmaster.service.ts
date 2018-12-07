import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs/index';
import {catchError, tap} from 'rxjs/operators';
import {Student} from '../classes/Student';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {print} from "util";

@Injectable({
  providedIn: 'root'
})

export class PassmasterService {
  httpOptions = {
    headers: new HttpHeaders(
      {'Authorization': localStorage.getItem('Authorization')}
    )
  };

  apiUrl = 'https://passmaster.herokuapp.com/rest/';

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl + 'students/', this.httpOptions);
  }
}
