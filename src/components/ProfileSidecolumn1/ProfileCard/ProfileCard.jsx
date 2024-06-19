import React from 'react'
import Cover from '../../../assets/img/cover.jpg'
import Profile from '../../../assets/img/profileImg.jpg'
import './ProfileCard.css'
export const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
        <div className="ProfileName">
            <span>Zenm MJ</span>
            <span>Senior UI/YII</span>
        </div>
        <div className="followStatus">
            <hr />
            <div>
            <div className="follow">
                <span>6,890</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>1</span>
                <span>Followers</span>
            </div>
            </div>
            <hr />
        </div>
        <span>
            My Profile
        </span>
    </div>
  )
}
