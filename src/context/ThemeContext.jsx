"use client"

import { createContext, useEffect, useState } from "react";

export const  Themecontext=createContext();
const getFromLocalStorage=()=>{
    if(typeof window !=="undefined"){

       const value=localStorage.getItem("theme");
       return value||"light"
    
    }
}
export const ThemeContextprovider=({children})=>{
    const [theme,setTheme]=useState(()=>{
        return getFromLocalStorage();
    })
    const toggle=()=>{
        setTheme(theme=="light"?"dark":"light");
    }
    useEffect(()=>{
     localStorage.setItem("theme",theme)
    },[theme])

    return <Themecontext.Provider  value={{theme,toggle}}>{children}</Themecontext.Provider>
}