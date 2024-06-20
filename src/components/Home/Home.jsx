import React from 'react'
import './Home.css'
import { Profileside } from '../ProfileSidecolumn1/Profile/Profileside'
import { PostSide } from '../Postsidecolumn2/PostSide/PostSide'
import { RightSide } from '../RightSidecolumn3/RightSide/RightSide'

export const Home = () => {
  return (
    <div className="Home">
        <Profileside/>
        <PostSide/>
       <RightSide/>
    </div>
  )
}
