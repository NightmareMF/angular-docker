import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private keycloakService: KeycloakService,
    private auth: AuthService,
    private router: Router
  ) {}

  loginWithKeycloak() {
    this.keycloakService.login()
    
  }

  loginWithAuth0() {
    this.auth.loginWithRedirect({
      appState: { target: '/dashboard' }  // Custom redirect route after login
    });
    console.log("Logged in successfully");
  }
}
