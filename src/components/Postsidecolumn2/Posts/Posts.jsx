import React from 'react'
import './Posts.css'
import { PostsData } from '../../../data/Posts'
import { Post } from '../Post/Post'
export const Posts = () => {
  return (
    <div className="Posts">
        
       {
        PostsData.map((post,id)=>{
            return <Post data={data} id={id}/>
        })
       }
       
    </div>
  )
}
