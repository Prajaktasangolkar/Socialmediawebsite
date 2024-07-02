import React ,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../redux/actions/userActions'

export const User = ({person}) => {
const serverPublic='http://localhost:5000/images/'
const {user}=useSelector((state)=>state.authReducer.data)
const [following,setFollowing]=useState(person.following.includes(user._id))
const dispatch=useDispatch()
 const handleFollow=()=>{
    following?
    dispatch(unfollowUser(person._id,user)):
    dispatch(followUser(person._id,user));
    setFollowing((prev)=>!prev)
 }
  return (
    <div className="follower">
    <div>
        <img src={person.coverPicture ?serverPublic+person.profilePicture :serverPublic+"defaultProfile.png" } alt=""
        className='followerImg'
        />
        <div className="name">
            <span>{person.firstname}</span>
            <span>@{person.username}</span>
        </div>
    </div>
    <button className={following ? 'button fc-button UnfollowButton': 'button fc-button '} onClick={handleFollow}>{following ? "Unfollow":"Follow"}</button>
</div>
  )
}
