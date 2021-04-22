import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowedstreamsComponent } from './followedstreams/followedstreams.component';
import { GamecardComponent } from './gamecard/gamecard.component';
import {StreamComponent} from './stream/stream.component';

const routes: Routes = [
  
  {path: 'following', component: FollowedstreamsComponent},
  {path: 'following/:streamId', component: StreamComponent },
  {path: 'games', component: GamecardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
