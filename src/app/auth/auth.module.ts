import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent }    from './login.component';
import { AuthComponent }    from './auth.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    AuthComponent,
  ],
  providers: [
  ]
})
export class AuthModule {}
