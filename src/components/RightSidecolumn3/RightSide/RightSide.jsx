import React, { useState } from 'react';
import './RightSide.css';
import Home from '../../../assets/img/home.png';
import Noti from '../../../assets/img/noti.png';
import Comment from '../../../assets/img/comment.png';
import { IoSettingsSharp } from "react-icons/io5";
import { TrendCard } from '../TrendCard/TrendCard';
import { Link } from 'react-router-dom';
// import { PostShare } from '../../Postsidecolumn2/PostShare/PostShare';

export const RightSide = () => {
  // const [showPostShare, setShowPostShare] = useState(false);

  // const handleOnclick = () => {
  //   setShowPostShare(true);
    
  // };

  return (
    <div>
      <div >
        <div className="navIcons">
          <Link to='/home'><img src={Home} alt="" /></Link>
          <IoSettingsSharp />
          <img src={Noti} alt=""  className='invert-color'/>
          <img src={Comment} alt=""  className='invert-color'/>
        </div>
        <TrendCard />
        <div className="container">
          <button className="button r-button">
            Share
          </button>
        </div>
      </div>
      {/* {showPostShare && (
        <div className="postShareContainer">
          <PostShare />
        </div>
      )} */}
    </div>
  );
};
