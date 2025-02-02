import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from '../app.init';
import { AuthModule } from '@auth0/auth0-angular';
import { appConfig } from './app.config';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    KeycloakAngularModule,
    AuthModule.forRoot({
      domain: 'dev-ap3njygmes8twpv3.us.auth0.com',  // Replace with your Auth0 domain
      clientId: 'OkpWRlHcfHKpJfqY38xz5BMX2jl9UEHC',   // Replace with your Auth0 client ID
      authorizationParams: {
        redirect_uri: window.location.origin + '/dashboard'  // Redirect after login
      }
    })
    // AuthModule.forRoot({
    //   domain: 'angularwebapplication.us.auth0.com',
    //   clientId: 'pRPQMQ7dWsErZZ0trUBc01LeJuHHKKvH',
    //   authorizationParams: {
    //     redirect_uri: window.location.origin
    //   }
    // }),
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   deps: [KeycloakService],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
