import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: Http) { }

  getAllSongs() {
    return this.http.get('/api/songs')
    .pipe(map(res => res.json()));
  }

  getSongById(id) {
    return this.http.get('/api/songs/' + id)
    .pipe(map(res => res.json()));
  }
}
