import { Component, OnInit } from '@angular/core';
import {StreamsService} from '../streams.service';

@Component({
  selector: 'app-followedstreams',
  templateUrl: './followedstreams.component.html',
  styleUrls: ['./followedstreams.component.scss']
})
export class FollowedstreamsComponent implements OnInit {

  streams = [];


  constructor(private streamService: StreamsService) {

    this.streamService.getStreams().subscribe(items => {
         
      items.map(el => {
        this.streams.push(el);
      })
      
     });

     
    
  }

  

  ngOnInit(): void {
    
  }

}
