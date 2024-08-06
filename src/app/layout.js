
import { getServerSession } from "next-auth";
import '/styles/globals.css';
import AuthProvider from "./components/AuthProvider";
import Navbar from "./components/navbar";
export default async function RootLayout({ children}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <AuthProvider session ={session}>
      <body>
          <Navbar/>
          {children}
      </body>
      </AuthProvider>
    </html>
  );
}
