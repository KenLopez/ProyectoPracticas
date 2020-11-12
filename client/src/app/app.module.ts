import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NuevaPublicacionComponent } from './nueva-publicacion/nueva-publicacion.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { EstudianteComponent } from './estudiante/estudiante.component'


//Mario, agregue los modulos HttpClientModule y FormsModule
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RestartUserComponent } from './restart-user/restart-user.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

const routes: Route[] = [
  {path: '', component: ParentComponentComponent},
  {path:'SignIn', component: SignInComponent},
  {path:'ForgotPw', component: RestartUserComponent},
  {path:'Home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent,
    RestartUserComponent,
    HomeComponent,
    NuevaPublicacionComponent,
    SearchComponent,
    NavegacionComponent,
    ParentComponentComponent,
    PublicacionComponent,
    EstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
