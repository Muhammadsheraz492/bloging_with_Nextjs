import { Menu } from '@/component/Menu/Menu'
import { CardList } from '@/component/cardList/CardList'
import React from 'react'
import style from './blog.module.css'
export default function page  ({searchParams}) {
  const page=parseInt(searchParams)||1
  const {cat}=searchParams
   console.log('====================================');
   console.log("This is Category %s",cat);
   console.log('====================================');
  return (
    <div className={style.container}>
    <h1 className={style.title}>{cat} Blog</h1>
    <div className={style.content}>
     <CardList page={page} cat={cat} />
     <Menu />
    </div>
    </div>
  )
}
