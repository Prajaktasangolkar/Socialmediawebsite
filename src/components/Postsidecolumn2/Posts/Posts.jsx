import React,{useEffect} from 'react'
import './Posts.css'
import { Post } from '../Post/Post';
import { useDispatch,useSelector } from 'react-redux';
import { getTimeLinePosts } from '../../../redux/actions/postAction';
import {useParams} from 'react-router-dom'
export const Posts = () => {
  const user =useSelector((state)=>state.authReducer.data.user)
  let {posts,loading}=useSelector((state)=>state.uploadReducer)
  const params=useParams()
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getTimeLinePosts(user._id))
  },[])
  if (!posts) return "no posts";
  if(params.id) posts=posts.filter((post)=>post.userId===params.id)
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
