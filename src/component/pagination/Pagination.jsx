"use client"
import React from 'react'
import style from './pagination.module.css'
import { useRouter } from 'next/navigation'
 const Pagination = ({page,hasPrev,hasNext}) => {
  const router=useRouter()
  return (
    <div  className={style.container}>
      <button className={style.button}
        disabled={!hasPrev}
         onClick={()=>router.push(`?page=${page-1}`)}
         
      
      >Previous</button>
      <button className={style.button}
      disabled={!hasNext}
      onClick={()=>router.push(`?page=${page+1}`)}
      >Next</button>
    </div>
  )
}

export  {Pagination}