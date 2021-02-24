import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;

  constructor(public readonly authService: AuthService) {}

  public ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  public login() {
    this.authService.beginLoginFlow();
  }

  public logout() {
    this.authService.logout();
  }
}
