import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import {AuthService} from "./auth.service";

declare var firebase;

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}


  canActivate(): Observable<any> {
    let component = this;
    return firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("user");
        return true;

      } else {
        component.router.navigateByUrl('/auth');
        return false;
      }
    });



  }
}
