import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FollowedstreamsComponent } from './followedstreams/followedstreams.component';
import { HeadingTitleComponent } from './heading-title/heading-title.component';
import { GamecardComponent } from './gamecard/gamecard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    FollowedstreamsComponent,
    HeadingTitleComponent,
    GamecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
