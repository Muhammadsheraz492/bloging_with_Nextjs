import React from 'react'
import style from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
export const Card = ({ item, key }) => {
    return (
        <div className={style.container} key={key}>

                {item.img && (
            <div className={style.imgContainer}>
                    <Image src={"/p1.jpeg"} alt="" fill className={style.img} />
            </div>
                )}
            <div className={style.textContainer}>
                <div className={style.details}>
                    <span className={style.date}>{item.createdAt.substring(0, 10)} - </span>
                    <span className={style.category}>{item.catSlug}</span>
                </div>
                <Link href={"/SinglePage"}>
                    <h1 className={style.title}>{item.title}</h1>
                </Link>
                <p className={style.desc }  >
                    {item.desc.substring(0, 60)}
                </p>
                <Link href={`/post/${item.postSlug}`} className={style.link}>
                    Read more
                </Link>
            </div>
        </div>
    )

}
