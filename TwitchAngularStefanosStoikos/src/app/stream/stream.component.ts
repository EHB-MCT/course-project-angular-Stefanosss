import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StreamsService} from '../streams.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {

  snapshot: any;
  stream;
  streamChat= [];
  spinner = true;

  constructor(private route: ActivatedRoute, private streamsService: StreamsService) { 
    

  }

  ngOnInit(): void {

    

    const routeParams = this.route.snapshot.paramMap;
    const streamIdFromRoute = routeParams.get('streamId');

    setTimeout(() => {
      this.streamsService.getStream(streamIdFromRoute).subscribe(item => {
        this.stream = item;
        
        this.stream.chat.map(message => {
        let number = Math.floor((Math.random() * 100) + 1);
  
        this.streamChat.push({number, message})
  
        });    
        
      });
      this.spinner = false;
    }, 1250)

    

    
    
    
  }


}
