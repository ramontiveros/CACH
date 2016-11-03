import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    pageTitle: string;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() { 
      this.pageTitle = "Dashboard";
    }

    logout() {
      this.authService.logout();
      this.router.navigate(['auth']);
    }

}

