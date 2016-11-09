import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    errorMessage: string;
    buttonDisabled: boolean;
    formError: boolean;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() { 
        this.buttonDisabled = false;
        this.formError = false;
    }

    login() {    
      this.buttonDisabled = true;
      this.formError = false;
      /*
      this.authService.login(this.email, this.password).then((d) => {
          this.router.navigate(['app']);
          this.buttonDisabled = false;
      }, (d) => {
          this.errorMessage = d.message;
          this.buttonDisabled = false;          
          this.formError = true;
      });
      */
    }    
}