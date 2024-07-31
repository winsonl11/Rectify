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
            token.accessToken = account.accessToken;
          }
          return token;
        },
        async session(session, token) {
          session.accessToken = token.accessToken;
          return session;
        }
      },
      debug: true
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };