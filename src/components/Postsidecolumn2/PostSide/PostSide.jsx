import React from 'react'
import './PostSide.css'
import { PostShare } from '../PostShare/PostShare'
import { Posts } from '../Posts/Posts'

export const PostSide = () => {
  return (
    <div className="PostSide">
        <PostShare/>
        <Posts/>
    </div>
  )
}
