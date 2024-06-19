import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../../data/Followersdata'
export const FollowersCard = () => {
  return (
    
    <div className="FollowerCard">
        <h3>Who is following you</h3>

        {
            Followers.map((follower,id)=>{
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div className="follower">
                        <div>
                            <img src={follower.img} alt=""
                            className='followerImg'
                            />
                            <div className="name">
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='button fc-button'>Follow</button>
                    </div>
                )
            })
        }
    </div>


  )
}
