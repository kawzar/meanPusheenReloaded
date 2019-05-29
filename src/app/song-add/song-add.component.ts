import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';
export interface ISong{
  title:string;
  _id: number;
  lyrircs:string;
  order: number;
  credits: string;
}
@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css']
})
export class SongAddComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private songsService: SongsService) { }
  song: any = {title: "", lyrics:"", order: -1, credits:""};
  message: string;

  ngOnInit() {
  }

  add($event){
    $event.preventDefault();
    this.songsService.addSong(this.song).subscribe(res => {
      this.router.navigate(['songs']);
    })
  }

}
