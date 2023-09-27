import { Menu } from '@/component/Menu/Menu'
import { CardList } from '@/component/cardList/CardList'
import React from 'react'
import style from './blog.module.css'
export default function page  () {
  return (
    <div className={style.container}>
    <h1 className={style.title}>Style Blog</h1>
    <div className={style.content}>
     <CardList />
     <Menu />
    </div>
    </div>
  )
}
