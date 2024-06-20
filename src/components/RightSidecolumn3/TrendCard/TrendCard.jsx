import React from 'react'
import './TrendCard.css'
import { TrendData } from '../../../data/TrendData'
export const TrendCard = () => {
  return (
    <div className="TrendCard">
         <h3>Trend for you</h3>
        
            {
            TrendData.map((data,id)=>{
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className='trend'>
                        <span>#{data.name}</span>
                        <span>{data.shares}k shares</span>
                    </div>
                  )
            })
         }
         
    </div>
  )
}
