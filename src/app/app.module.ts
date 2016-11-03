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


import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';




export const firebaseConfig = {
    apiKey: "AIzaSyBdgdpyGBHWA4_3Uq9Ig52gpyo9SagSAf0",
    authDomain: "chas-itesm.firebaseapp.com",
    databaseURL: "https://chas-itesm.firebaseio.com",
    storageBucket: "chas-itesm.appspot.com",
    messagingSenderId: "841229532620"
  };
export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
  };


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterializeModule,    
    AppRoutingModule,
    AuthModule,
    MainModule
  ],
  providers: [
      AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
