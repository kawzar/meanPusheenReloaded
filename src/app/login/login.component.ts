import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { tap, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = { username:'', password:'' };
  message = '';
  data: any;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginData.username, this.loginData.password).subscribe(res => {
      if(res){
        this.router.navigate(['songs']);
      }
    });
  }

  logout(){
    this.authService.logout();
  }

}
