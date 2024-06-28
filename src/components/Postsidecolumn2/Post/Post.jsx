import React ,{useState} from 'react'
import './Post.css'
import Comment from '../../../assets/img/comment.png'
import Share from '../../../assets/img/share.png'
import Heart from '../../../assets/img/like.png'
import NotLike from '../../../assets/img/notlike.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../../redux/API/PostRequest'

export const Post = ({data}) => {
  const {user}=useSelector((state)=>state.authReducer.data)
  const [liked,setLiked]=useState(data.likes.includes(user._id))
  const [likes,setLikes]=useState(data.likes.length)
  console.log('datassssss',{data});
  const handleLiked=()=>{
    setLiked((prev)=>!prev)
    likePost(data._id, user._id);
     liked ? setLikes((prev)=>prev-1):setLikes((prev)=>prev+1)
  }
  return (
    <div className="Post">

        <img src={data.image ? `http://localhost:5000/images/`+data.image : ""} alt="" />
        {/* console.log('src',{ `http://localhost:5000/images/`+data.image }); */}
        <div className="postReact">
            <img src={liked ?Heart : NotLike} alt="" style={{cursor:'pointer'}}
            onClick={handleLiked} />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <span style={{color:"var(--gray)",fontSize:"12px"}}>{likes} likes</span>

        <div className="detail">
          <span><b>{data.name}</b></span>
          <span>{data.desc}</span>
        </div>
    </div>
  )
}
