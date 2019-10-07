import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string = '';
  public password: string = '';

  constructor() { }

  ngOnInit() {
  }

  login(loginForm) {
    console.log(loginForm);
  }

}
