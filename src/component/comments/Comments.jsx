"use client"
import Link from 'next/link'
import styles from './comments.module.css'

import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
const fetcher = async (url) => {
  const res = await fetch(url)
  const data = res.json()
  if (!res.ok) {
    const error = new Error(data.message)
    throw error
  }
  // console.log("This is Response %s",res.json());
  return data;

}
const Comments = ({ postSlug }) => {
  const { status } = useSession()
  const { data, isLoading } = useSWR(`http://localhost:3000/api/comment?slug=${postSlug}`, fetcher)
 console.log('====================================');
 console.log(data);
 console.log('====================================');
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder='Write a comment...' className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href={"/login"}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading ? "loading..." :
          data?.comment.map((item) => (

            <div className={styles.comment}>
              <div className={styles.user}>
                {item?.user?.image&&(
                  <Image src={item.user.image} width={50} height={50} className={styles.image} />

                )}
                <div className={styles.userinfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>{item.createdAt.substring(0,10)}</span>
                </div>
              </div>
              <p className={styles.decs}>{item.desc}</p>
            </div>
          ))}

      </div>
    </div>
  )
}

export default Comments