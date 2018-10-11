import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: Http) { }

  getAllSongs() {
    return this.http.get('/songs')
    .pipe(map(res => res.json()));
  }
}
