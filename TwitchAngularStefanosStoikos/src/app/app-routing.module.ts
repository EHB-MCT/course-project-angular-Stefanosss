import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowedstreamsComponent } from './followedstreams/followedstreams.component';
import { GamecardComponent } from './gamecard/gamecard.component';
import {StreamComponent} from './stream/stream.component';

const routes: Routes = [
  
  {path: '', redirectTo:'/following',  pathMatch: 'full'},
  {path: 'following', component: FollowedstreamsComponent},
  {path: 'games', component: GamecardComponent},
  {path: 'following/:streamId', component: StreamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
