import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: any = [];
  searchText : string;

  constructor(private songsService: SongsService, private authService:AuthService) { }
  
  userLoggedIn: boolean;

  ngOnInit() {
    this.songsService.getAllSongs().subscribe(res => {
      this.songs = res.songs;
    })

    this.userLoggedIn = this.authService.loggedIn;
  }

}
