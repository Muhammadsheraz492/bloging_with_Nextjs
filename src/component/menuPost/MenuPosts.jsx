import Link from 'next/link'
import React from 'react'
import style from './menuPost.module.css'
import Image from 'next/image'

export const MenuPosts = ({ item,withImage }) => {
    // console.log(withImage);
    // console.log(withImage);
    console.log(item);
    return (
        <div className={style.items}>

        <Link href={`/posts/${item?.postSlug}`} className={style.item}>
          {withImage&&(<div className={style.imgContainer}>
            <Image src={"/p1.jpeg"} alt='image' fill className={style.img} />
          </div>)}
          <div className={style.textContainer}>
            <span className={`${style.category} ${style.travel}`}>
              {item?.catSlug}
            </span>
            <h3 className={style.postTitle}>{item?.title}</h3>
            <div className={style.deatils}>
              <span className={style.username}>Muhammad Shiraz  -</span>
              <span className={style.date}>10.03.2023</span>
            </div>
          </div>

        </Link>
      </div>
    )
}
