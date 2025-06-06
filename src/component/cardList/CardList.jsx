import React from 'react'
import style from './cardList.module.css'
import { Pagination } from '../pagination/Pagination'
import { Card } from '../card/Card'
const getData=async(page,cat)=>{
  const res=await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat||""}`,{
    cache:"no-cache"
  })
  if(!res.ok){
  throw new Error("Something went wrong Fetching Posts")
 }
 return res.json()
} 


const CardList = async({page,cat}) => {
    const {posts,count}=await getData(page,cat)
    const POST_PER_PAGE=4;
    const hasPrev=POST_PER_PAGE*(page-1)>0;
    const hasNext=POST_PER_PAGE*(page-1)+POST_PER_PAGE<count;
    return (
    <div className={style.container}>
      <h1 className={style.title}>Recent Posts</h1>
      <div className={style.posts}>
        {
          posts?.map((item)=>(

            <Card item={item} key={item._id} />
          ))
        }
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export {CardList}