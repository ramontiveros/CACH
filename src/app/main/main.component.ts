import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {UserDataService} from "./user-data.service";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    pageTitle: string;
    activeTeam: string;

  constructor(private authService: AuthService, private router: Router, private userData: UserDataService) {}

    ngOnInit() {
      this.pageTitle = "Dashboard";
      this.activeTeam = this.userData.getActiveTeam();
    }

    logout() {
      this.authService.logout();
      Object.keys(localStorage)
      .forEach(function(key){
           if (/^firebase/.test(key)) {
               localStorage.removeItem(key);
           }
       });
       window.location.reload();
    }

    setActiveTeam(team: string) {
      this.userData.setActiveTeam(team);
    }


}

