import React from 'react'
import style from './singlePage.module.css'
import Image from 'next/image'
function SinglePage() {
    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <div className={style.textContainer}>
                    <h1 className={style.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className={style.user}>
                       <div style={style.userImageContainer}>
                            <Image src={"/p1.jpeg"} alt="" fill className={style.image} />
                        </div>
                         <div className={style.userTextContainer}>
                            <span className={style.username}>Muhammad Shiraz</span>
                            <span className={style.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={style.imageContainer}>
                    <Image src={"/p1.jpeg"} alt="" fill className={style.image} />
                </div>
            </div>

        </div>
    )
}

export default SinglePage