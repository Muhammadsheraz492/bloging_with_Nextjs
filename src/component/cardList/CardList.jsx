import React from 'react'
import style from './cardList.module.css'
import { Pagination } from '../pagination/Pagination'
import { Card } from '../card/Card'
const getData=async(page)=>{

 const res=await fetch(`http://localhost:3000/api/posts?page=${page}`,{
  cache:"no-cache"
 })
 if(!res.ok){
  throw new Error("Something went wrong Fetching Posts")
 }
 return res.json()
} 


const CardList = async({page}) => {
    const data=await getData(page)
    // console.log(data);
  return (
    <div className={style.container}>
      <h1 className={style.title}>Recent Posts</h1>
      <div className={style.posts}>
       <Card />
       <Card />
       <Card />
       <Card />
      </div>
      <Pagination />
    </div>
  )
}

export {CardList}