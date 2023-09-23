import React from 'react'
import style from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
export const CategoryList = () => {
  return (
    <div  className={style.container}>
    <h1 className={style.title}>Popular Categories</h1>
    <div  className={style.categories}>
    <Link
    href={"/blog"}
    className={`${style.category} ${style.style}`}
    >
      <Image src={"/style.png"} alt="" width={32} height={32} className={style.img}/>
       style
    </Link>
    <Link
    href={"/blog"}
    className={`${style.category}`}
    style={{background:"#da85c731"}}
    >
      <Image src={"/fashion.png"} alt="" width={32} height={32} className={style.img}/>
       fashion
    </Link>
    <Link
    href={"/blog"}
    className={`${style.category} `}
    style={{background:"#ff795736"}}

    >
      <Image src={"/travel.png"} alt="" width={32} height={32} className={style.img}/>
       travel
    </Link>
    <Link
    href={"/blog"}
    className={`${style.category}`}
    style={{background:"#ffb04f45"}}

    >
      <Image src={"/culture.png"} alt="" width={32} height={32} className={style.img}/>
       calture
    </Link>
    <Link
    href={"/blog"}
    className={`${style.category}`}
    style={{background:"#5e4fff31"}}

    >
      <Image src={"/coding.png"} alt="" width={32} height={32} className={style.img}/>
       coding
    </Link>
    </div>

    </div>
  )
}
` `