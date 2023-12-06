
import React from 'react'
import style from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache"
  })
  if (!res.ok) {
    throw new Error("Failed")
  }
  return res.json()
}



  const CategoryList = async() => {
  const {categories}=await getData();
  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular Categories</h1>
      <div className={style.categories}>
     {categories?.map((item)=>(
          <Link
          href={`/blog?cat=${item.slug}`}
          className={`${style.category} `}
          style={{background:`#${item.color}`}}
          key={item._id}
        >
       {
        item.img&&(
          <Image src={item.img} alt="" width={32} height={32} className={style.img} />
        )
       }
          {item.title}
        </Link>
        
     ))}
      </div>

    </div>
  )
}
export  {CategoryList}