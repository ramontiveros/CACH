import { Component, OnInit } from '@angular/core';
import { FirebaseService, FirebaseArray } from 'ng2-firebase/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Video } from './video.component';

declare var firebase;

@Component({
    selector: 'create',
    templateUrl: 'video-create.component.html',
    styleUrls: ['video-create.component.css']
})
export class VideoCreateComponent implements OnInit {
    file: File;
    constructor(private firebaseService: FirebaseService<Video>) { }

    ngOnInit() { }

    onSubmit(video: Video) {
        let newRef = firebase.database().ref().child('videos').push(video),
            key = newRef.key,
            fileRef = firebase.storage().ref().child('videos/' + key + ".mp4"),
            fileData = this.file;
        fileRef.put(fileData);
    }

    readFile($event) : void {
        let target = $event.target;
        this.file = target.files[0];
    }
}