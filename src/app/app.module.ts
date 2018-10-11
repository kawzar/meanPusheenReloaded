import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SongsService } from './songs.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

const ROUTES = [
  {
    path: '',
    redirectTo: 'songs',
    pathMatch: 'full'
  },
  {
    path: 'songs',
    component: SongsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }