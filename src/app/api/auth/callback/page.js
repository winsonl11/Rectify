"use client"
import { signIn, useSession, getSession} from "next-auth/react";
import styles from "/styles/page.module.css";
import "@/styles/globals.css";
import DropDownMenu from "@/src/app/components/dropdown.js"
import Navbar from "@/src/app/components/navbar.js"

export default function Home(){
  const { data: session, status} = useSession();
  console.log(session, status);
  if (status === "loading") {
    return (
      <main className="flex flex-col justify-between min-h-screen items-center">
        <p>Loading...</p>
      </main>
    );
  }
    if(session){
    return (
     <main className="flex flex-col justify-between min-h-screen items-center">
       
       <DropDownMenu/>
     </main>
   );
    } 
      
    
  } 

