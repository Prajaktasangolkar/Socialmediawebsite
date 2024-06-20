import React from 'react'
import './RightSide.css'
import Home from '../../../assets/img/home.png'
import Noti from '../../../assets/img/noti.png'
import Comment from '../../../assets/img/comment.png'
import { IoSettingsSharp } from "react-icons/io5";
import { TrendCard } from '../TrendCard/TrendCard'


export const RightSide = () => {
  return (
    <div className="Rightside">
           <div className="navIcons">
            <img src={Home} alt="" />
            <IoSettingsSharp />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
           </div>
           <TrendCard/>
           <div className="container">
  <button className="button r-button">
    Share
  </button>
</div>

           

    </div>


  )
}
