import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {

  
  streamsCollection: AngularFirestoreCollection<any[]>;
  streamDocument: AngularFirestoreDocument<any>;

  streams: Observable<any[]>
  stream: Observable<any>;

  constructor(firestore: AngularFirestore) {

    // this.streams = firestore.collection('streams').valueChanges(); 

    this.streamsCollection = firestore.collection('streams');
  

    this.streams = this.streamsCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;      
      
      return {id, ...data};
    })))

    
      
      


  }

  getStreams(){    

    return this.streams;

  }

  getStream(streamId){
      
    // this.streamDocument = this.streamsCollection.doc<any>(streamId).ref.get;

    // this.stream = this.streamDocument.valueChanges();
  
    this.streamsCollection.doc(streamId).ref.get().then(doc => {
      

       this.streamDocument = doc.data() as AngularFirestoreDocument;
      //  console.log(doc.data());

              
               
      
    })

    return this.streamDocument;
    
    

  }

}
