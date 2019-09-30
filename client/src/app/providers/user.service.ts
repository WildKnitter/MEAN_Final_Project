import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

// User Service Typescript Code for the Hip to be Square Capstone Project.

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials:true
  };

  private authenticated: boolean = false;
  private administrator: boolean = false;

  constructor(private http: HttpClient) { }

  /* POST for Login. */
  // POST http://localhost:3000/users/login
  login(username: string, password: string) {
    return this.http.post(`${this.usersEndpoint}login`, {username: username, password: password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
  
  /* POST for Register. */
  // POST http://localhost:3000/users/register
  register(username: string, email: string, password: string) {
    return this.http.post(`${this.usersEndpoint}register`, { username: username, email: email, password: password }, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  /* PUT users for editing user. */
  // PUT http://localhost:3000/users/edituserprofile/:ID
  editUser(ID: number,email: string): Observable<any> {
    return this.http.put(`${this.usersEndpoint}edituserprofile/${ID}`, { email: email }, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  /* DELETE user. */
  // DELETE http://localhost:3000/users/edituserprofile/:ID
  deleteUser(ID: number) {
    return this.http.delete(`${this.usersEndpoint}edituserprofile/${ID}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  /* GET users listing for non-admins. */
  // GET: http://localhost:3000/users/
  getUsers(): Observable<any> {
    return this.http.get(this.usersEndpoint, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  /* Set Authorization Status */
  setAuthStatus(status: boolean) {
    this.authenticated = status;
  }

  /* Get Authorization Status */
  getAuthStatus() {
    return this.authenticated;
  }

  /* Set Administrator Status */
  setAdminStatus(status: boolean) {
    this.administrator = status;
  }

  /* Get Administrator Status */
  getAdminStatus() {
    return this.administrator;
  }

}