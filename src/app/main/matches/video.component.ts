import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {toast} from "angular2-materialize";

@Component({
  selector: 'content',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  ngOnInit() {
    toast("woo!");
  }
}

