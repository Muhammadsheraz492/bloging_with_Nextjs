import React from 'react'
import style from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '../themeToggle/ThemeToggle'
import { AuthLink } from '../authLinks/AuthLink'
export const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src={"/facebook.png"} alt='facebook' width={24} height={24} />
        <Image src={"/instagram.png"} alt='facebook' width={24} height={24} />
        <Image src={"/tiktok.png"} alt='facebook' width={24} height={24} />
        <Image src={"/youtube.png"} alt='facebook' width={24} height={24} />


      </div>
      <div className={style.logo}> Solution</div>
      <div className={style.link}>
        <ThemeToggle />
        <Link href={'/'} >HomePage</Link>
        <Link href={'/'} >Contact</Link>
        <Link href={'/'} >About</Link>
        <AuthLink />

      </div>
    </div>
  )
}
