import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {HomeComponent} from './home/home.component';

//Mario, agregue los modulos HttpClientModule y FormsModule
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const routes: Route[] = [
  {path: '', component: LogInComponent},
  {path:'SignIn', component: SignInComponent},
  {path:'Home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent,
    HomeComponent
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
