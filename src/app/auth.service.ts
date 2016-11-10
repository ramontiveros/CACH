import { Injectable } from '@angular/core';
import  { FirebaseService, FirebaseAuthService } from "ng2-firebase/core"

declare var firebase;

@Injectable()
export class AuthService {

  auth: FirebaseAuthService<any>;
  constructor (private af: FirebaseService<any>) {
    this.auth = new FirebaseAuthService<any>();
  }

  login(email, pswd){
    return  this.auth.authWithPassword({email: email, password: pswd});
  }


  logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  }
}
