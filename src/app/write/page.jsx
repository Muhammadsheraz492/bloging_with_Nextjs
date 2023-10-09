"use client"
import React, { useState } from 'react'
import styles from './write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
function page() {
    const [open, setOpen] = useState(false)
    const [value, setvalue] = useState("")
    return (
        <div className={styles.container}>

            <input type='text' placeholder='Title' />
            <div className={styles.editor}>
                <button className={styles.button} onClick={()=>setOpen(!open)}>
                    <Image src={"/plus.png"} alt="" width={16} height={16} />
                </button>
                {open&&(<div className={styles.add }>
                      <button  className={styles.addbutton}>
                          <Image src={"/image.png"} alt='' width={16} height={16} />
                      </button>
                      <button  className={styles.addbutton}>
                          <Image src={"/external.png"} alt='' width={16} height={16} />
                      </button>
                      <button  className={styles.addbutton}>
                          <Image src={"/video.png"} alt='' width={16} height={16} />
                      </button>
                     </div>)}
              {/* <ReactQuill
                   value={value}
                   onChange={setvalue}
                   placeholder='Tell your story...'
                   
                   /> */}
            </div>

        </div>
    )
}

export default page