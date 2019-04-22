import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map } from 'rxjs/operators';

export interface IDocument{
  title: string;
  content: string;
  _id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: Http) { }

  getAll() {
    return this.http.get('/api/documents')
    .pipe(map(res => res.json()));
  }

  getFiltered(data: string) {
    return this.http.get('/api/documents/filter/' + data)
    .pipe(map(res => res.json()));
  }
  
  getById(id) {
    return this.http.get('/api/documents/' + id)
    .pipe(map(res => res.json()));
  }
}
