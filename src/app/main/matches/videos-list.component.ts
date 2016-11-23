import { Component, OnInit } from '@angular/core';
import { FirebaseService, FirebaseArray } from 'ng2-firebase/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserDataService } from "../user-data.service";
import { Video } from './video.component';

@Component({
  selector: 'content',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
  team_id  ;
  videos: FirebaseArray<Video>;
  checkedItems: Array<string>;
  constructor(public userData: UserDataService, private firebase: FirebaseService<Video>, private router: Router) {
    this.videos = firebase.child<Video>("videos").asArray();
    this.checkedItems = [];
  }

  ngOnInit() {

  }

  goToVideo(id) {
    this.router.navigate(["app/videos/view/" + id]);
  }

  checkBox(id){

      let myIndex = this.checkedItems.indexOf(id);

      if (myIndex > -1){
        this.checkedItems.splice(myIndex, 1);
      }
      else {
        this.checkedItems.push(id);
      }




      console.log(this.checkedItems);
  }


  deleteVideo (){
      for (let i = 0; i < this.checkedItems.length; i ++){
        let id = this.checkedItems[i];
        let newRef = firebase.database().ref().child('videos/' + id);
        newRef.remove();
      }
      this.checkedItems = [];

  }

  modifyVideo(){
    //TODO
  }

}

