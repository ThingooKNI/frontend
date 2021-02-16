import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup

  constructor(private readonly builder: FormBuilder) {
    this.loginForm = this.builder.group({
      username: [],
      password: []
    });
  }

  ngOnInit(): void {
  }

}
