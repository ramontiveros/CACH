import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {
  constructor(public af: AngularFire) {}

  login(email, password) {
    return this.af.auth.login({ email: email, password: password });
  }

  logout() {
    return this.af.auth.logout();
  }

}
