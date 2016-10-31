import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class LoginService {
  constructor(public af: AngularFire) {}

  login(email, password) {
    this.af.auth.login({ email: email, password: password });
  }

  logout() {
    this.af.auth.logout();
  }
}
