import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

export interface ISong{
  title: string;
  lyrics: string;
  credits: string;
  order: number;
  _id: number;
}

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

  getAllSongs() {
    return this.http.get<ISong[]>('/api/songs')
  }

  getSongById(id){
    return this.http.get<ISong>('/api/songs/' + id)
  }

  deleteSongById(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('jwtToken')
      })
    };

    return this.http.delete('/api/songs/' + id, httpOptions)
  }

  updateSongById(id, song){
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    return this.http.put('/api/songs/' + id, song, httpOptions);
  }

  addSong(song){
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };

    return this.http.post('/api/songs/', song, httpOptions)
  }
}
