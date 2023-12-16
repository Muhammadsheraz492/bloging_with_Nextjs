"use client"
import React, { useContext } from 'react'
import Style from './themeToggle.module.css'
import Image from 'next/image'
import { Themecontext } from '@/context/ThemeContext'
export const ThemeToggle = () => {
  const { theme, toggle } = useContext(Themecontext)
  return (
    <div className={Style.container} onClick={() => toggle()}  style={theme=="dark"?{background:"white"}:{background:"#0f172a"}} >
      <Image src={"/moon.png"} alt='' width={12} height={12} />
      <div className={Style.ball}  style={theme=="dark"?{left:1,background:"#f172a"}:{right:1,background:"white"}} ></div>
      <Image src={"/sun.png"} alt='' width={12} height={12} />

    </div>
  )
}
