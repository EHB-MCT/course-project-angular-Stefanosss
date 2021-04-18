import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.games = firestore.collection('games').valueChanges();
    
    
  }

  getGames(){
    return this.games;
  }

  
}
