import React, { useState ,useEffect} from 'react';
import { FaPen } from "react-icons/fa";
import './ProfileLeft.css';
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../../redux/API/UserRequest.js'
import { logOut } from '../../../redux/actions/AuthAction.js';
import {useNavigate} from 'react-router-dom'
export const ProfileLeft = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch=useDispatch()
  const params=useParams()
  const profileUserId=params.id;
  const [profileUser,setprofileUser]=useState([])
  const {user}= useSelector((state)=>state.authReducer.data)

  useEffect(()=>{
    const fetchProfileUser=async()=>{
          if(profileUser=== user._id){
            setprofileUser(user)
          }
          else{
            const profileUser=await UserApi.getUser(profileUserId);
            setprofileUser(profileUser)
          }
    }
    fetchProfileUser()
  },[user])//if user change then only rendering will done
  const navigate = useNavigate();
  const handleLogOut=()=>{
    dispatch(logOut(navigate))
    
  }
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {user._id===profileUserId ? (
        <div>
          <FaPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            data={user}
          />
        </div>):
        ("")
      }
      </div>
       
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in</b>
        </span>
        <span>{profileUser.livesin}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at</b>
        </span>
        <span>{profileUser.workAt}</span>
      </div>
      <button className="button logout-button" onClick={handleLogOut}>Logout</button>
    </div>
  );
};
