"use client"
import { SessionProvider } from "next-auth/react";
import '/styles/globals.css';

export default function RootLayout({ children, session}) {
  
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
