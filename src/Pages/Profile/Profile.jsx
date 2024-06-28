import React from 'react'
import { LeftsideProfile } from '../profilecolum1/LeftsideProfile/LeftsideProfile'
import './Profile.css'
import { PostSide } from '../../components/Postsidecolumn2/PostSide/PostSide'
import { RightSide } from '../../components/RightSidecolumn3/RightSide/RightSide'
import { ProfileCard } from '../../components/ProfileSidecolumn1/ProfileCard/ProfileCard'
export const Profile = () => {
  return (
    <div className="Profile">
        <LeftsideProfile/>
        <div className="Profile-center">
            <ProfileCard location='profilecard'/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}
