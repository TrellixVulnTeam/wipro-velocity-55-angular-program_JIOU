import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Video } from "../model/video";
@Injectable({
    providedIn: 'root'
})
export class VideoService {
    videoList = {
        items: [
            { url: "ABC", title: "ABC", videotype: '', distribution: '' }
        ]
    }
    constructor() {
    }

    video$: Observable<Array<any>> = new Observable(
        observer => {
            observer.next(this.videoList.items);
        }
    );



}