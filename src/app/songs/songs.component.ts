import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: any = [];
  searchText : string;

  constructor(private songsService: SongsService, private authService:AuthService, private router: Router) { }
  
  userLoggedIn: boolean;

  ngOnInit() {
    this.songsService.getAllSongs().subscribe(res => {
      this.songs = res;
    })

    this.userLoggedIn = this.authService.loggedIn;
  }

  delete($event, id: number){
    if(confirm("¿Segura que querés borrar esta canción?")) {
      this.songsService.deleteSongById(id).subscribe(res => {
        this.songsService.getAllSongs().subscribe(res => {
          this.songs = res;
        })
      });
  }
  }
}
