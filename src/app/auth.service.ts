import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>('/api/user/signin', { username: username, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('jwtToken', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('jwtToken');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('jwtToken') !== null);
  }
}
