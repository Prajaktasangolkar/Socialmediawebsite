import React from 'react'
import { Logosearch } from '../Logosearch/Logosearch'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import './Profileside.css'
import { FollowersCard } from '../FollowersCard/FollowersCard'

export const Profileside = () => {
  return (
    <div className="ProfileSide">
        <Logosearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}
