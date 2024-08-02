"use client"
import { signIn, useSession, getSession} from "next-auth/react";
import styles from "/styles/page.module.css";
import "@/styles/globals.css";
import DropDownMenu from "@/components/dropdown.js"
import Navbar from "@/components/navbar.js"

export default function Recommender(){
  const { data: session, status} = useSession();
  console.log(session, status);
  
    return (
     <main className="flex flex-col justify-between min-h-screen items-center">
       <Navbar/>
       <DropDownMenu/>
     </main>
   );
  } 

