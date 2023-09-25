import React from 'react'
import style from './menuCategories.module.css'
import Link from 'next/link'
export default function MenuCategories() {
  return (
    <div  className={style.categoryList}>
         <Link
    href={"/blog"}
    className={`${style.category} ${style.style}`}
    style={{background:"#57c4ff31"}}
    >
     
       style
    </Link>
    <Link
    href={"/blog"}
    className={`${style.category}`}
    style={{background:"#da85c731"}}
    >
       fashion
    </Link>
    <Link
    href={"/blog"}
    className={`${style.category} `}
    style={{background:"#ff795736"}}

    >
       travel
    </Link>
    <Link
    href={"/blog"}
    className={`${style.category}`}
    style={{background:"#ffb04f45"}}

    >
       calture
    </Link>
    <Link
    href={"/blog"}
    className={`${style.category}`}
    style={{background:"#5e4fff31"}}

    >
       coding
    </Link>
    </div>
  )
}
