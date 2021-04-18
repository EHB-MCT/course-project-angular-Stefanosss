import { Component, OnInit } from '@angular/core';
import {StreamsService} from '../streams.service';

@Component({
  selector: 'app-followedstreams',
  templateUrl: './followedstreams.component.html',
  styleUrls: ['./followedstreams.component.scss']
})
export class FollowedstreamsComponent implements OnInit {

  streams = this.streamService.getStreams();

  constructor(private streamService: StreamsService) {
    
  }

  ngOnInit(): void {
  }

}
