import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import "rxjs/Rx";
import 'rxjs/add/operator/take';

import { AuthService } from './auth.service';
import {Observable} from "rxjs";

declare var firebase;

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}


  canActivate(): boolean {
    let cookies = this.authService.isLogged();

    if (cookies ){
      this.router.navigateByUrl('/app');
      return false;
    }
    else{
      return true;
    }
  }
  /*
  canActivate(): Observable<any> {
    let component = this;
    return firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("user");
        component.router.navigateByUrl('/app');
        return false;
      } else {
        console.log("no");
        return true;
      }
    });


  }
  */

}
