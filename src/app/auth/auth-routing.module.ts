import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login.component';
import {LoginGuard} from "../login-guard.service";

const routes: Routes = [
  {
      path: 'auth',
      component: AuthComponent,
      canActivate: [LoginGuard],
      children: [
        {
            path: '',
            component: LoginComponent
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

export const routedComponents = [AuthComponent];
