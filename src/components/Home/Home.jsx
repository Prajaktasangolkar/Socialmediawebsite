import React from 'react'
import './Home.css'
import { Profileside } from '../ProfileSidecolumn1/Profile/Profileside'
import { PostSide } from '../Postsidecolumn2/PostSide/PostSide'
export const Home = () => {
  return (
    <div className="Home">
        <Profileside/>
        <PostSide/>
        <div className="RightSide">Rightside</div>
    </div>
  )
}
