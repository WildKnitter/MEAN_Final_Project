// App Module Typescript Code for the Hip to be Square Capstone Project.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { LeagueService } from './providers/league.service';
import { TeamService } from './providers/team.service';
import { UserService } from './providers/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManagerComponent } from './manager/manager.component';
import { AdminComponent } from './admin/admin.component';
import { TeamsComponent } from './teams/teams.component';
import { PatternsComponent } from './patterns/patterns.component';

const appRoutes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'patterns', component: PatternsComponent},
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent},
   {path: 'manager', component: ManagerComponent},
   {path: 'admin', component: AdminComponent},
   {path: 'teams', component: TeamsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ManagerComponent,
    AdminComponent,
    TeamsComponent,
    PatternsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LeagueService,
    TeamService,
    UserService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
