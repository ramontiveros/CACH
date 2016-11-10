import { Injectable } from '@angular/core';
import  {FirebaseAuthService} from "ng2-firebase/core"

@Injectable()
export class AuthService {

  constructor (public af: FirebaseAuthService<any>){  //  ESTA LINEA CRASHEA
    console.log("constructed entry");
  }

  login(email, pswd){
    return true;
  }
}
