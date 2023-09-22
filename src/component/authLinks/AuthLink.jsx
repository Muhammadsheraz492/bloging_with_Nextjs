import React from 'react'
import Style from './authLink.module.css'
import Link from 'next/link'
export const AuthLink = () => {
  const statius="authenticated"   
  return <>
  {statius=="authenticated"?(
<Link   href={"/login"}>
Login
</Link>

  ):(
    <>
<Link  href={"/write"}>
write
</Link>
    <span  className={Style.link}>Logout</span>
    </>

  )

  }
  </>
}
