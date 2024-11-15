import { Component } from '@angular/core';
import {  AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private auth: AuthService) {}
  logout() {
    this.auth.logout();
  }
}
