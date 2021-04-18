import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {

 

  streams: Observable<any[]>;
  
  constructor(firestore: AngularFirestore) {
    this.streams = firestore.collection('streams').valueChanges();
    
    
  }

  getStreams(){
    return this.streams;
  }

}
