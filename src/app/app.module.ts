import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SongsService } from './songs.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SearchFilterPipe } from './search-filter.pipe'
import { FormsModule } from '@angular/forms';
import { SongViewComponent } from './song-view/song-view.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SongAddComponent } from './song-add/song-add.component';
import { LogoutComponent } from './logout/logout.component';
import { SongEditComponent } from './song-edit/song-edit.component';


const ROUTES = [
  {
    path: '',
    redirectTo: 'songs',
    pathMatch: 'full'
  },
  {
    path: 'songs',
    component: SongsComponent
  },
  {
    path: 'songs/song-details/:id',
    component: SongViewComponent
  },
  {
    path: 'songs/edit/:id',
    component: SongEditComponent
  },
  {
    path: 'songs/add',
    component: SongAddComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: { title: 'Logout' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SearchFilterPipe,
    SongViewComponent,
    LoginComponent,
    SignupComponent,
    SongAddComponent,
    LogoutComponent,
    SongEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }