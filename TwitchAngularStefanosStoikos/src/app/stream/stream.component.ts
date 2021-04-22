import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {StreamsService} from '../streams.service';


@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {

  snapshot: any;
  stream;
  streamChat= [];

  constructor(private route: ActivatedRoute, private streamService: StreamsService) { 
    
  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const streamIdFromRoute = routeParams.get('streamId');
    console.log(streamIdFromRoute);
    
    this.stream = this.streamService.getStream(streamIdFromRoute);

    this.stream.chat.map(el => {
      this.streamChat.push(el);
    });
    
    
    
    
  }

}
