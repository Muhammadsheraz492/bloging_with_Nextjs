import Ract from 'react'
import style from './singlePage.module.css'
import { Menu } from '@/component/Menu/Menu'
import Image from 'next/image'
import Comments from '@/component/comments/Comments'
function SinglePage() {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
          <div className={style.user}>
            <div className={style.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={style.avatar} />

            </div>
            <div className={style.userTextContainer}>
              <span className={style.username}>Muhammad Shiraz</span>
              <span className={style.date}>12.02.2023</span>

            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={style.image} />
        </div>
      </div>
      <div className={style.content}>

        <div className={style.post}>
       <div className={style.description}>

       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis temporibus odio repellendus dolorem dignissimos, vitae ut commodi neque placeat quia laudantium delectus harum velit! Officia minima magnam saepe totam.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis temporibus odio repellendus dolorem dignissimos, vitae ut commodi neque placeat quia laudantium delectus harum velit! Officia minima magnam saepe totam.</p>
      <h1>This is Header</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis temporibus odio repellendus dolorem dignissimos, vitae ut commodi neque placeat quia laudantium delectus harum velit! Officia minima magnam saepe totam.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis temporibus odio repellendus dolorem dignissimos, vitae ut commodi neque placeat quia laudantium delectus harum velit! Officia minima magnam saepe totam.</p>
      <h1>This is Header</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis temporibus odio repellendus dolorem dignissimos, vitae ut commodi neque placeat quia laudantium delectus harum velit! Officia minima magnam saepe totam.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis temporibus odio repellendus dolorem dignissimos, vitae ut commodi neque placeat quia laudantium delectus harum velit! Officia minima magnam saepe totam.</p>
      <h1>This is Header</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis temporibus odio repellendus dolorem dignissimos, vitae ut commodi neque placeat quia laudantium delectus harum velit! Officia minima magnam saepe totam.</p>

       </div>
     <div  style={style.commit}>
      <Comments />
     </div>
        </div>
        <Menu />
      </div>
    
       
    </div>
  )
}

export default SinglePage