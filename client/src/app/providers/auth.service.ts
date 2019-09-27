import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private isAuthenticated: boolean = false;
  private isAdmin: boolean = false;

  constructor(private http: HttpClient) { }

  setAuth(isAuthenticated: boolean):void {
    this.isAuthenticated = isAuthenticated;
  }

  getAuth():boolean {
    return this.isAuthenticated;
  }

  setAdmin(isAdmin: boolean):void {
    this.isAdmin = isAdmin;
  }

  getAdmin():boolean {
    return this.isAdmin;
  }

}
