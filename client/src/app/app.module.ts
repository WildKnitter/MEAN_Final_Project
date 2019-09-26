import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManagerComponent } from './manager/manager.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent},
   {path: 'manager', component: ManagerComponent},
   {path: 'admin', component: AdminComponent}
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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
