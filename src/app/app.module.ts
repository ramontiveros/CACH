import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';


import { MaterializeModule } from 'angular2-materialize';

export const firebaseConfig = {
    apiKey: "AIzaSyBdgdpyGBHWA4_3Uq9Ig52gpyo9SagSAf0",
    authDomain: "chas-itesm.firebaseapp.com",
    databaseURL: "https://chas-itesm.firebaseio.com",
    storageBucket: "chas-itesm.appspot.com",
    messagingSenderId: "841229532620"
  };
export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Redirect
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
