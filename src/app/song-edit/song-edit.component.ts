import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  song: any  = {title: "", credits: "", order: 0, lyrics: ""};

  constructor(private songsService: SongsService, private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.songsService.getSongById(id).subscribe(res => {
      this.song = res;
    })
  }

  update($event){
    $event.preventDefault();
    let id = this.activatedRoute.snapshot.params.id;
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };

    this.songsService.updateSongById(id, this.song).subscribe(res => {
      this.router.navigate(['songs']);
    });
  }

}
