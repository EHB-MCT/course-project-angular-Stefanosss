import { Component, OnInit } from '@angular/core';
import {GamesService} from '../games.service';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.scss']
})
export class GamecardComponent implements OnInit {

  games = this.gamesService.getGames();

  constructor(private gamesService: GamesService) {
    this.games;     
  }

  ngOnInit(): void {
  }

}
