import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import {FirebaseModule} from 'ng2-firebase/core';
import { AppComponent } from './app.component';


export const firebaseConfig = {
    apiKey: "AIzaSyBdgdpyGBHWA4_3Uq9Ig52gpyo9SagSAf0",
    authDomain: "chas-itesm.firebaseapp.com",
    url: "https://chas-itesm.firebaseio.com",
    storageBucket: "chas-itesm.appspot.com",
    messagingSenderId: "841229532620"
  };



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirebaseModule.forRoot(firebaseConfig),
    MaterializeModule,
  ],
  providers: [

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
