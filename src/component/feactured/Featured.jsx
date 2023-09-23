import React from 'react'
import style from './featured.module.css'
import Image from 'next/image'
export const Featured = () => {
  return (
    <div  className={style.container}>
    <div  className={style.title}>
   <h1><b>Hey, Muhammad Shiraz here!</b> Discover my Stories and creative ideas</h1>
    </div>
   <div  className={style.post}>
    <div  className={style.imgContainer}>
      <Image  src={"/p1.jpeg"} alt="" fill/>
    </div>
    <div  className={style.textContainer}>
      
    </div>
   </div>

    </div>
  )
}
