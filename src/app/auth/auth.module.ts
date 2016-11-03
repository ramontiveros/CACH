import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { LoginComponent }    from './login.component';
import { AuthComponent }    from './auth.component';


@NgModule({  
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MaterializeModule
  ],
  declarations: [
    LoginComponent,
    AuthComponent,
  ],
  providers: [
  ]
})
export class AuthModule {}
