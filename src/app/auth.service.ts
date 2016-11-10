import { Injectable } from '@angular/core';
import  { FirebaseService, FirebaseAuthService } from "ng2-firebase/core"

@Injectable()
export class AuthService {
  auth: FirebaseAuthService<any>;
  constructor (private af: FirebaseService<any>) {
    this.auth = new FirebaseAuthService<any>();
  }

  login(email, pswd){
    return true;
  }
}
