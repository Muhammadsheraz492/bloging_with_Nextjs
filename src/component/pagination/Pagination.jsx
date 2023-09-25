import React from 'react'
import style from './pagination.module.css'
export const Pagination = () => {
  return (
    <div  className={style.container}>
      <div className={style.button}>Previous</div>
      <div className={style.button}>Next</div>
    </div>
  )
}
