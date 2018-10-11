import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: any = [];

  constructor(private songsService: SongsService) { }

  ngOnInit() {
    this.songsService.getAllSongs().subscribe(res => {
      console.log(res.songs);
      console.log(res);
      this.songs = res.songs;
    })
  }

}
