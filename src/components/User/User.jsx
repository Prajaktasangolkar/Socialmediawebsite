import React ,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../redux/actions/userActions'

export const User = ({person}) => {
const serverPublic='https://social-media-backend-rose-two.vercel.app/images/'
const {user}=useSelector((state)=>state.authReducer.data)
const [following,setFollowing]=useState(person.followers.includes(user._id))
const dispatch=useDispatch()
useEffect(() => {
  setFollowing(person.followers.includes(user._id));
}, [person.followers, user._id]);

const handleFollow = () => {
  if (following) {
    dispatch(unfollowUser(person._id, user));
  } else {
    dispatch(followUser(person._id, user));
  }
  setFollowing((prev) => !prev);
};
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
