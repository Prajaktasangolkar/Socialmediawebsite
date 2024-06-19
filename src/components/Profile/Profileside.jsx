import React from 'react'
import { Logosearch } from '../Logosearch/Logosearch'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import './Profileside.css'

export const Profileside = () => {
  return (
    <div className="ProfileSide">
        <Logosearch/>
        <ProfileCard/>
    </div>
  )
}
