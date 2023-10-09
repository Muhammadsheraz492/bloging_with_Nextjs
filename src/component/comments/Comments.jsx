import Link from 'next/link'
import styles from './comments.module.css'

import React from 'react'
import Image from 'next/image'

const Comments = () => {

    const status="authenticated"
  return (
    <div  className={styles.container }>

        <h1  className={styles.title}>Comments</h1>
        {status==="authenticated"?(
            <div className={styles.write}>
               <textarea  placeholder='Write a comment...' className={styles.input} />
             <button  className={styles.button}>Send</button>
            </div>
        ):(
            <Link href={"/login"}>Login to write a comment</Link>
        )}
        <div  className={styles.comments}>
            <div className={styles.comment}>
            <div  className={styles.user}>
                <Image src={'/p1.jpeg'} width={50} height={50} className={styles.image} />
                <div  className={styles.userinfo}>
                  <span  className={styles.username}>Muhammad</span>
                  <span  className={styles.date}>01.01.2023</span>
                </div>
            </div>
            <p  className={styles.decs}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus illum eos ab. Incidunt voluptatem est voluptatum, molestiae assumenda, iure doloribus, debitis minus minima reiciendis obcaecati laudantium tempora quos impedit quasi.</p>
            </div>
     
        </div>
    </div>
  )
}

export default Comments