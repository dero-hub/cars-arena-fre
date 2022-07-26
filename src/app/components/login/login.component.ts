import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    phone: '',
    password: ''
  }
  submitted = false;
  msg = {};


  constructor(private router: Router, private zone: NgZone, private http: UserService) { }

  ngOnInit(): void {
  }

   saveUser() {
    const userDetails = {
      phone: this.user.phone,
      password: this.user.password
    };
    this.submitted = true;
    this.msg =  this.http.signin(userDetails)
    this.submitted = true;

  }


}
