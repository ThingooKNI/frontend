import { Component, OnInit } from '@angular/core'
import { UserInfo } from 'angular-oauth2-oidc'
import { AuthService } from 'src/app/auth/auth.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  constructor (public readonly authService: AuthService) {}
}
