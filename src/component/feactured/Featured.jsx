import React from 'react'
import style from './featured.module.css'
import Image from 'next/image'
export const Featured = () => {
  return (
    <div  className={style.container}>
   <h1  className={style.title}><b>Hey, Ahmad here!</b> Discover my Stories and creative ideas</h1>
   <div  className={style.post}>
    <div  className={style.imgContainer}>
      <Image  src={"/p1.jpeg"} alt="" fill  className={style.img}/>
    </div>
    <div  className={style.textContainer}>
    <h1 className={style.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
    <p  className={style.postDesc}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque hic obcaecati maxime ducimus minima libero, vero numquam asperiores, possimus quod repudiandae aliquid consequuntur nisi itaque nihil rerum! Necessitatibus, laboriosam!
    </p>
    <button className={style.button}>Read more</button>
    </div>
   </div>

    </div>
  )
}
