import React, { useState } from 'react'
import { FaPen } from "react-icons/fa";
import './ProfileLeft.css'
import ProfileModal from '../ProfileModal/ProfileModal';
export const ProfileLeft = () => {
  const[modalOpened,setModalOpened]=useState(false)
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <FaPen  onClick={()=>setModalOpened(true)}/>
          <ProfileModal/>
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>in realtionship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in</b>
        </span>
        <span>Multan</span>
      </div>
      <div className="info">
        <span>
          <b>Works at</b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  )
}
