import React,{useEffect} from 'react'
import './Posts.css'
import { Post } from '../Post/Post';
import { useDispatch,useSelector } from 'react-redux';
import { getTimeLinePosts } from '../../../redux/actions/postAction';
export const Posts = () => {
  const user =useSelector((state)=>state.authReducer.data.user)
  const {posts,loading}=useSelector((state)=>state.uploadReducer)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getTimeLinePosts(user._id))
  },[])
  return (
    <div className="Posts">
        
       { loading ? "Fetching Posts...":
        posts.map((post,id)=>{
            return <Post data={post} id={id}/>
            
        })
       }
       
    </div>
  )
}
