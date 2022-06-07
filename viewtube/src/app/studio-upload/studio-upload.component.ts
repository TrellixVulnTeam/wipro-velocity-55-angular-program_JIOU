import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent implements OnInit {

  video: any = {
    url: "",
    title: "",
    videotype: "",
    distribution: ""
  }
  // Inject VideoService
  constructor(private service: VideoService) { }

  ngOnInit(): void {
  }
  uploadVideo() {
    alert('Upload Button Clicked')
    console.log(this.video)
    this.service.videoList.items.push(this.video)
  }

}
