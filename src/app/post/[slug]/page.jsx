import Ract from 'react'
import style from './singlePage.module.css'
import { Menu } from '@/component/Menu/Menu'
import Image from 'next/image'
import Comments from '@/component/comments/Comments'
const Getdata=async(slug)=>{
  const res= await fetch(`http://localhost:3000/api/posts/${slug}`,{
    cache:'no-cache'
  })
  if(!res.ok){
   throw Error("Failed")
  }
  return res.json()
}
async function SinglePage({params}) {
  const {slug}=params;
  console.log(slug);
  const {post}=await Getdata(slug)
  console.log(post);
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.title}>{post.title} </h1>
          <div className={style.user}>
            {post?.user?.image&&(

              <div className={style.userImageContainer}>
                <Image src={post.user.image} alt="" fill className={style.avatar} />
  
              </div>
             
            )

            }
            <div className={style.userTextContainer}>
              <span className={style.username}>{post?.user?.name}</span>
              <span className={style.date}>12.02.2023</span>

            </div>
          </div>
        </div>
        {post?.img&&(
        <div className={style.imageContainer}>
          <Image src={post.img} alt="" fill className={style.image} />
        </div>

        )

        }
      </div>
      <div className={style.content}>

        <div className={style.post}>
       <div className={style.description} dangerouslySetInnerHTML={{__html:post?.desc}} />
     <div  style={style.commit}>
      <Comments postSlug={slug} />
     </div>
        </div>
        <Menu />
      </div>
    
       
    </div>  








  )
}

export default SinglePage