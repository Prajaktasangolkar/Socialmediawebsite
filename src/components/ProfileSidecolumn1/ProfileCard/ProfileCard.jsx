import React from 'react'
import {Link} from 'react-router-dom'
import './ProfileCard.css'
import {useSelector} from 'react-redux'
export const ProfileCard = ({location}) => {
  const {user}=useSelector((state)=>state.authReducer.data)
  const {posts}=useSelector((state)=>state.uploadReducer)
  // const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const serverPublic='http://localhost:5000/images/'
  
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={user.coverPicture ?serverPublic+user.coverPicture :serverPublic+"defaultCover.jpg" } alt="" />
            <img src={user.coverPicture ?serverPublic+user.profilePicture :serverPublic+"defaultProfile.png" } alt="" />
        </div>
        <div className="ProfileName">
            <span>{user.firstname} {user.lastname}</span>
            <span>{user.worksAt ? user.worksAt :"Write about yourself"}</span>
        </div>
        <div className="followStatus">
            <hr />
            <div>
            <div className="follow" style={{color:'white'}}>
                <span>{user.following.length}</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>{user.followers.length}</span>
                <span>Followers</span>
            </div>
           {location=='profilecard' &&(
            <>
              <div className="vl">
                      
              </div>
              <div className="follow">
                <span>{posts.filter((post)=>post.userId===user._id).length}</span>
                <span>Posts</span>
              </div>
            </>)}

            </div>
            <hr />
        </div>
        {
            location== 'profilecard'? ' ':<span>
              <Link  style={{textDecoration:'none',color:"inherit"}}to={`/profile/${user._id}`}> My Profile</Link>
        </span>
        }
    </div>
  )
}
