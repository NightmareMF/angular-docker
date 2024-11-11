import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
    return () => {
        return keycloak.init({
            config: {
                url: 'http://localhost:8080', // Your Keycloak URL
                realm: 'angular-web', // Your realm
                clientId: 'angular-web-client', // Your client ID
            },
            initOptions: {
                checkLoginIframe: false, // Disable login iframe
                onLoad: 'check-sso',
            },
            loadUserProfileAtStartUp: true
        })
    };
}
