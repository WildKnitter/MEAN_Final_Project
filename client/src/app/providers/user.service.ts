import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  login(username: string, password: string) {
    return this.http.post(`${this.usersEndpoint}login`, {username: username, password: password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
  
  register(username: string, email: string, password: string) {
    return this.http.post(`${this.usersEndpoint}register`, { username: username, email: email, password: password }, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  editUser(ID: number,email: string): Observable<any> {
    return this.http.put(`${this.usersEndpoint}editUserprofile/${ID}`, { email: email }, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  deleteUser(ID: number) {
    return this.http.delete(`${this.usersEndpoint}editUserprofile/${ID}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  getUsers(): Observable<any> {
    return this.http.get(this.usersEndpoint, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  setAuthStatus(status: boolean) {
    this.authenticated = status;
  }

  getAuthStatus() {
    return this.authenticated;
  }

  setAdminStatus(status: boolean) {
    this.administrator = status;
  }

  getAdminStatus() {
    return this.administrator;
  }

}