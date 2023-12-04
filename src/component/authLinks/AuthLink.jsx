"use client"
import React, { useState } from 'react'
import Style from './authLink.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
export const AuthLink = () => {
  const {status} = useSession()
  const [open,setopen]=useState(false)
  console.log(status);
 return <>
    {status == "unauthenticated" ? (
      <Link href={"/login"}  className={Style.link}>
        Login
      </Link>

    ) : (
      <>
        <Link href={"/write"}  className={Style.link}>
          write
        </Link>
        <span className={Style.link} onClick={signOut}>Logout</span>
      </>

    )
     
    }
  <div  className={Style.burger}  onClick={()=>setopen(!open)}>
  <div className={Style.line}></div>
  <div className={Style.line}></div>
  <div className={Style.line}></div>

  </div>
  {open&&(
<div  className={Style.responsive}>
  <div  href={"/"}>HomePage</div>
  <div  href={"/"}>About</div>
  <div  href={"/"}>Contact</div>
  {statius == "authenticated" ? (
      <Link href={"/login"}>
        Login
      </Link>

    ) : (
      <>
        <Link href={"/write"}>
          write
        </Link>
        <span className={Style.link}>Logout</span>
      </>

    )
     
    }
</div>
  )}


  </>
}
