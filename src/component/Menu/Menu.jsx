import React from 'react'
import style from './menu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { MenuPosts } from '../menuPost/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'
const getData=async(page,cat)=>{
  const res=await fetch(`http://localhost:3000/api/hot_posts`,{
    cache:"no-cache"
  })
  if(!res.ok){
  throw new Error("Something went wrong Fetching Posts")
 }
 return res.json()
} 

export const Menu = async() => {
  const {topPosts}=await getData()
  console.log(topPosts);
  return (
    <div className={style.container}>

      <h2 className={style.subtitle}>{"what's hot"}</h2>
      <h1 className={style.title}>Most Popular</h1>
      {
          topPosts?.map((item)=>(

            <MenuPosts item={item} withImage={false} />
          ))
        }
      {/* <MenuPosts withImage={false} />
      <MenuPosts withImage={false} />
      <MenuPosts withImage={false} /> */}
      <h2 className={style.subtitle}>Discover by topics</h2>
      <h1 className={style.title}>Categories</h1>
      <MenuCategories />
      <h2 className={style.subtitle}>Chosen by the editor</h2>
      <h1 className={style.title}>Editor Picks</h1>
      <MenuPosts withImage={true} />
      <MenuPosts withImage={true} />
      <MenuPosts withImage={true} />
      <MenuPosts withImage={true} />
      <MenuPosts withImage={true} />


    </div>
  )
}
