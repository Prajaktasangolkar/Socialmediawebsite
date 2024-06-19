import React from 'react'
import './Home.css'
import { Profileside } from '../Profile/Profileside'
export const Home = () => {
  return (
    <div className="Home">
        <Profileside/>
        <div className="postSide">Posts</div>
        <div className="RightSide">Rightside</div>
    </div>
  )
}
