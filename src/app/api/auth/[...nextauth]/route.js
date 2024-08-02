import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL, spotifyApi } from "@/lib/spotify";

async function refreshAccessToken(token) {
    console.log("refreshing access token");
  try {
    spotifyApi.setAccessToken(token.access_token);
    spotifyApi.setRefreshToken(token.refresh_token);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      access_token: refreshedToken.access_token,
      expires: Date.now() + refreshedToken.expires_in * 1000,
      refresh_token: refreshedToken.refresh_token ?? token.refresh_token,
    };
  } catch (error) {
    console.error("Error refreshing access token", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions ={
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL
    })
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({token, account}){
        if(account){
            token.access_token = account.access_token;
            token.refresh_token = account.refresh_token;
            token.expiration = account.expires_in * 1000;
            return token;
        }

        if(Date.now() < token.expiration){
            return token;
        }
        return refreshAccessToken(token);
    },
    async session({session, token}){
        session.access_token = token.access_token;
        session.refresh_token = token.refresh_token;
        return session;
    }
  },
  
  debug: true,
};
const handler = NextAuth( authOptions);
export { handler as GET, handler as POST };