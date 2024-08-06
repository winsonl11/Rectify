import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import GitHubProvider from "next-auth/providers/github";
import { LOGIN_URL } from "@/lib/spotify";

export const authOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_ID,
            clientSecret: process.env.SPOTIFY_SECRET,
            authorization: LOGIN_URL,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
           async jwt({token, account}){
                if(account){
                    token.access_token = account.access_token;
                    token.expires_at = account.expires_at;
                    token.id = account.id;
                }
                return token;
           },
           async session({session, token}){
                session.user = token;
                return session;
           },
    }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };