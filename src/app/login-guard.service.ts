import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AngularFireAuth} from 'angularfire2';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";


@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
    return this.auth.map((auth) => {
      console.log(route, state);
      if (auth) {
        console.log('authenticated');
        this.router.navigateByUrl('/app');
        return false;
      }
      return true;
    }).first(); // this might not be necessary - ensure `first` is imported if you use it
  }
}
