import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
import KeycloakProvider from 'next-auth/providers/keycloak';

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: "xmigrate",
      clientSecret: "2UKMYJlz3XAzP5U9UqMIiflRQ9xkWDUq",
      scope: 'openid email profile',
      domain: process.env.KEYCLOAK_DOMAIN,
      authorizationUrl: `https://${process.env.KEYCLOAK_DOMAIN}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/auth`,
      tokenUrl: `https://${process.env.KEYCLOAK_DOMAIN}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
      profileUrl: `https://${process.env.KEYCLOAK_DOMAIN}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/userinfo`,
    }),
  ],
  // Other NextAuth.js configurations...
});
