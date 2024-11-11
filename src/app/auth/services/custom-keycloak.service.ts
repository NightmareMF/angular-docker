import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class CustomKeycloakService {
  constructor(private keycloakService: KeycloakService,
    private router: Router
  ) { }

  initKeycloak(): Promise<boolean> {
    return this.keycloakService.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'angular-web',
        clientId: 'angular-web-client',
      },
      initOptions: {
        onLoad: 'check-sso', // Will check if user is logged in but won't redirect
        checkLoginIframe: false,
      }
    }).catch(error => {
        console.error('Keycloak initialization failed', error);
        return false;
    });
  }

  async login(): Promise<void> {
    try {
      await this.keycloakService.login();
      this.router.navigate(['/dashboard']); // Redirect to /home after login
  } catch (error) {
    console.error('Keycloak login failed', error);
  }
  }

  logout(): void {
    this.keycloakService.logout();
  }

  isLoggedIn(): Promise<boolean> {
    return this.keycloakService.isLoggedIn();
  }

  getToken(): Promise<string> {
    return this.keycloakService.getToken();
  }
}
