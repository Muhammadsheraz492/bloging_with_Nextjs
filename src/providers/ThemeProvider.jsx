"use client"
import { Themecontext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

export const ThemeProvider = ({children}) => {
  const {theme}=useContext(Themecontext)
    return (
    <div  className={theme}>{children}</div>
  )
}
