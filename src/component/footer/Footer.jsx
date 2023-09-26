import React from 'react'
import style from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
export const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.logo}>
           <Image src={"/logo.png"} alt="Cybernate Solution" width={50} height={50} />
          <h1 className={style.textLogo}>Solution </h1>
        </div>
        <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In omnis saepe ex ullam optio autem earum repudiandae vero, a doloribus delectus dolores maxime veritatis ut repellat? Pariatur perspiciatis sint ad!</p>
        <div className={style.icons}>
          <Image src={"/facebook.png"} alt="" width={18} height={18} />
          <Image src={"/instagram.png"} alt="" width={18} height={18} />
          <Image src={"/tiktok.png"} alt="" width={18} height={18} />
          <Image src={"/youtube.png"} alt="" width={18} height={18} />
        </div>

      </div>
      <div className={style.links}>
        <div className={style.list}>
          <span  style={{fontWeight:"bold"}}>Links</span>
          <Link href={"/"} >Homepage</Link>
          <Link href={"/"} >Blog</Link>
          <Link href={"/"} >About</Link>
          <Link href={"/"} >Contact</Link>
        </div>
        <div className={style.list}>
          <span style={{fontWeight:"bold"}}>Tags</span>
          <Link href={"/"} >Style</Link>
          <Link href={"/"} >Fashion</Link>
          <Link href={"/"} >Coding</Link>
          <Link href={"/"} >Travel</Link>
        </div>
        <div className={style.list}>
          <span style={{fontWeight:"bold"}}>Social</span>
          <Link href={"/"} >Facebook</Link>
          <Link href={"/"} >Instagram</Link>
          <Link href={"/"} >Youtube</Link>
          <Link href={"/"} >Github</Link>
        </div>
      </div>

    </div>
  )
}
