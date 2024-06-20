import React from 'react'

import './LeftsideProfile.css'
import { Logosearch } from '../../../components/ProfileSidecolumn1/Logosearch/Logosearch'
import { FollowersCard } from '../../../components/ProfileSidecolumn1/FollowersCard/FollowersCard'
import { ProfileLeft } from '../ProfileLeft/ProfileLeft'
export const LeftsideProfile = () => {
  return (
    <div className="LeftsideProfile">
        <Logosearch/>
        <ProfileLeft/>
        <FollowersCard/>
    </div>

  )
}
