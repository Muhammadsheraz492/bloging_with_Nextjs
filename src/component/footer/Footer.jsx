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
          <h1 className={style.textLogo}>ToCybernate Blogs </h1>
        </div>
        <p className={style.desc}>Explore a world of knowledge, creativity, and inspiration at ToCybernate Blog. Dive into our diverse collection of articles covering a wide range of topics, including technology, fashion, coding, travel, and more. Immerse yourself in thought-provoking blog posts crafted to entertain, inform, and spark your curiosity.</p>
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
          <Link href={"/blog?cat=style"} >Style</Link>
          <Link href={"/blog?cat=fashion"} >Fashion</Link>
          <Link href={"/blog?cat=coding"} >Coding</Link>
          <Link href={"/blog?cat=travel"} >Travel</Link>
        </div>
        <div className={style.list}>
          <span style={{fontWeight:"bold"}}>Social</span>
          <a href="https://www.facebook.com/people/ToCybernate-Blogs/61556135141077/" target='_blank' >Facebook</a>
          <a href="https://www.instagram.com/tocybernateblogs/"  target="_blank">Instagram</a>
          <a href="https://www.youtube.com/channel/UCbwC0cVnWqGLUCHHqYWMnLQ" >Youtube</a>
          {/* <Link href={"/"} >
            <a target='_blank'>
               Github
              </a>
            </Link> */}
            <a href="https://github.com/Muhammadsheraz492" target="_blank">Github</a>

        </div>
      </div>

    </div>
  )
}
