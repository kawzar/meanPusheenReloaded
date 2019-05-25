import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, private router: Router) { }
  song: any = {title: "", lyrics:"", order: -1, credits:""};
  message: string;

  ngOnInit() {
  }

  add($event){
    $event.preventDefault();
    console.log(this.song);
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.post('/api/songs/',this.song, httpOptions).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['songs']);
    }, err => {
      this.message = err.error.msg;
    });
  }

}
