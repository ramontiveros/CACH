import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    pageTitle: string;

    constructor() { }

    ngOnInit() { 
      this.pageTitle = "Dashboard";
    }

}

