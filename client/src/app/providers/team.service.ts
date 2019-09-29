import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService 
{

  teams: Array<string> = [];

  private teamsEndpoint: string = 'http://localhost:3000/teams/data';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials:true
  }; 

  constructor(private http: HttpClient) { }

  /* GET Teams data. */
  // GET http://localhost:3000/teams/data
    getTeams(): Observable<any> {
    return this.http.get(this.teamsEndpoint, this.httpOptions)
      .pipe(map(res => <any[]>res));
    }

  /* GET teams data by team id. */
  // GET http://localhost:3000/teams/data/:id 
    getTeamsByTeamId(TeamId: number): Observable<any> {
    return this.http.get(`${this.teamsEndpoint}/${TeamId}`, this.httpOptions)
     .pipe(map(res => <any[]>res));
    }

  /* GET Teams data by league. */
  // GET http://localhost:3000/teams/data/byleague/:id
    getTeamsByLeague(League: string): Observable<any> {
      return this.http.get(`${this.teamsEndpoint}/byleague/${League}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
    }

  // DELETE A TEAM
  // DELETE http://localhost:3000/teams/data/:id 
    deleteTeam(TeamId: number): Observable<any> {
      return this.http.delete(`${this.teamsEndpoint}/${TeamId}`, this.httpOptions)
        .pipe(map(res => <any[]>res));
    }
}
