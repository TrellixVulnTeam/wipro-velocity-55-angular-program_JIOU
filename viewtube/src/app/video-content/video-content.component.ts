import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent implements OnInit {

  constructor(private service: VideoService) { }
  updatedVideoList: any = []
  ngOnInit(): void {

    this.service.video$.subscribe(data => {
      this.updatedVideoList = data
    })
  }

}
