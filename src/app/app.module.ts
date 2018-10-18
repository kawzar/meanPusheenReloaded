import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SongsService } from './songs.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SearchFilterPipe } from './search-filter.pipe'
import { FormsModule } from '@angular/forms';


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
    SongsComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }