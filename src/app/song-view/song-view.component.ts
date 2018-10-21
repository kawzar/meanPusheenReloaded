import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-song-view',
  templateUrl: './song-view.component.html',
  styleUrls: ['./song-view.component.css']
})
export class SongViewComponent implements OnInit {

  constructor(private songsService: SongsService, private activatedRoute: ActivatedRoute) { }

  song: any;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    console.log(this.activatedRoute.snapshot.params);
    this.songsService.getSongById(id).subscribe(res => {
      this.song = res.song;
    })
  }
}
