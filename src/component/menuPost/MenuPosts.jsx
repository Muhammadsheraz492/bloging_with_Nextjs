import Link from 'next/link'
import React from 'react'
import style from './menuPost.module.css'
import Image from 'next/image'

export const MenuPosts = ({ withImage }) => {
    // console.log(withImage);
    // console.log(withImage);
    return (
        <div className={style.items}>

        <Link href={"/"} className={style.item}>
          {withImage&&(<div className={style.imgContainer}>
            <Image src={"/p1.jpeg"} alt='image' fill className={style.img} />
          </div>)}
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.travel}`}>
              Travel
            </span>
            <h3 className={style.postTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.deatils}>
              <span className={style.username}>Muhammad Shiraz  -</span>
              <span className={style.date}>10.03.2023</span>
            </div>
          </div>

        </Link>
      </div>
    )
}
