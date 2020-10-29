import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Route[] = [
  {path: '', component: LogInComponent},
  {path:'SignIn', component: SignInComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }