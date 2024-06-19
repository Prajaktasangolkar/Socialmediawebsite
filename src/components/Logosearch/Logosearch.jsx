import React from 'react'
import Logo from '../../assets/img/logo.png'
import { FiSearch } from "react-icons/fi";
import './Logosearch.css'
export const Logosearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} alt="" />
        <div className="Search">
          <input type="text" placeholder='#Explore' />
          <div className="s-icon">
              <FiSearch/>
          </div>
        </div>
    </div>
  )
}
