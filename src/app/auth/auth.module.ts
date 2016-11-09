import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { FirebaseModule } from 'ng2-firebase/core';

import { LoginComponent }    from './login.component';
import { AuthComponent }    from './auth.component';

import  {FirebaseAuthService} from "ng2-firebase/core"

export const firebaseConfig = {
  apiKey: "AIzaSyBdgdpyGBHWA4_3Uq9Ig52gpyo9SagSAf0",
  authDomain: "chas-itesm.firebaseapp.com",
  databaseURL: "https://chas-itesm.firebaseio.com",
  storageBucket: "chas-itesm.appspot.com",
  messagingSenderId: "841229532620"
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FirebaseModule.forRoot(firebaseConfig),

    AuthRoutingModule,
    MaterializeModule
  ],
  declarations: [
    LoginComponent,
    AuthComponent,
  ],
  providers: [
    FirebaseAuthService
  ]
})
export class AuthModule {}
