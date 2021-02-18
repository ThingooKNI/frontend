import { Component, OnInit } from '@angular/core'
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false

  constructor(protected readonly keycloak: KeycloakService) { }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn()
  }

  public login() {
    this.keycloak.login()
  }

  public logout() {
    this.keycloak.logout(window.location.origin)
  }

}
