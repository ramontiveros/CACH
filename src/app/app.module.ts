import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';

import { MainModule } from './main/main.module';
import { AuthService } from './auth.service';


import { FirebaseModule } from 'ng2-firebase/core';
import { AuthGuard } from "./auth-guard.service";
import { LoginGuard } from "./login-guard.service";
import { UserDataService } from "./main/user-data.service";




export const firebaseConfig = {
    apiKey: "AIzaSyBdgdpyGBHWA4_3Uq9Ig52gpyo9SagSAf0",
    authDomain: "chas-itesm.firebaseapp.com",
    databaseURL: "https://chas-itesm.firebaseio.com",
    storageBucket: "chas-itesm.appspot.com",
    messagingSenderId: "841229532620"
};
  /*
export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
*/


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  FirebaseModule.forRoot(firebaseConfig),
    AppRoutingModule,
    AuthModule,
    MainModule,
    MaterializeModule,
  ],
  providers: [
      AuthService,
    AuthGuard,
    UserDataService,
    LoginGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
