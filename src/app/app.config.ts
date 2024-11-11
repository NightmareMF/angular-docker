import * as router from '@angular/router';
import { routes } from './app-routing.module';
import { provideAuth0 } from '@auth0/auth0-angular';
import { ApplicationConfig } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    router.provideRouter(routes),
    provideAuth0({
      domain: 'angularwebapplication.us.auth0.com',  
      clientId: 'pRPQMQ7dWsErZZ0trUBc01LeJuHHKKvH',   
      authorizationParams: {
        redirect_uri: window.location.origin + '/dashboard' 
      }
    })
  ]
};
