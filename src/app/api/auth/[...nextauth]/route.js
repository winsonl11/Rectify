import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import {LOGIN_URL} from "@/lib/spotify";

export const authOptions={
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            authorization: LOGIN_URL
        })
    ],
    callbacks: {
        async jwt(token, user, account) {
          if (account?.accessToken) {
            token.accessToken = account.access_token;
            token.refreshToken = account.refresh_token;
            token.user = account.providerAccountId;
            token.expires = account.expires_at;
            console.log("jwt");
            return token;
          }
          

          if(Date.now() < token.expires * 1000){
              console.log("expired token");
              return token;
          }
        },
        async session(session, token) {
          session.accessToken = token.access_token;
          session.refreshToken = token.refresh_token;
          session.user = account.providerAccountId;
          session.expires = account.expires_at;
          console.log("session");
          return session;
        }
      },
      debug: true
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };