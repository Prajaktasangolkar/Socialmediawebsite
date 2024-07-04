import React ,{useState,useEffect} from 'react'
import './Post.css'
import Comment from '../../../assets/img/comment.png'
import Share from '../../../assets/img/share.png'
import Heart from '../../../assets/img/like.png'
import NotLike from '../../../assets/img/notlike.png'
import { useSelector,useDispatch } from 'react-redux'
import { likeUser,dislikeUser } from '../../../redux/actions/uploadAction'

export const Post = ({data}) => {
  const {user}=useSelector((state)=>state.authReducer.data)
  const [liked,setLiked]=useState(data.likes.includes(user._id))
  const [likes,setLikes]=useState(data.likes.length)
  console.log('datassssss',{data});
  const dispatch = useDispatch();
  
  const handleLike = () => {
    if (liked) {
      dispatch(dislikeUser(data._id, user._id));
      setLikes((prev) => prev - 1);
    } else {
      dispatch(likeUser(data._id, user._id));
      setLikes((prev) => prev + 1);
    }
    setLiked((prev) => !prev);
  };
 
  return (
    <div className="Post">

        <img src={data.image ? `http://localhost:5000/images/`+data.image : ""} alt="" />
        {/* console.log('src',{ `http://localhost:5000/images/`+data.image }); */}
        <div className="postReact">
            <img src={liked ?Heart : NotLike} alt="" style={{cursor:'pointer'}}
            onClick={handleLike} />
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
