import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: any = [];
  searchText : string;

  constructor(private songsService: SongsService) { }

  ngOnInit() {
    this.songsService.getAllSongs().subscribe(res => {
      this.songs = res.songs;
    })
  }

}
