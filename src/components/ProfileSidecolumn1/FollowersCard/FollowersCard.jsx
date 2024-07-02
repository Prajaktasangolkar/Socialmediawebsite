import React, {useEffect,useState} from 'react'
import './FollowersCard.css'
import { Followers } from '../../../data/Followersdata'
import { User } from '../../User/User'
import { getAllUser } from '../../../redux/API/UserRequest'
import { useSelector } from 'react-redux'
export const FollowersCard = () => {
    const [persons,setPersons]=useState([])
    const {user}=useSelector((state)=>state.authReducer.data)
    useEffect(()=>{
           const fetchPersons=async()=>{
            const {data}=await getAllUser();
               setPersons(data)
               console.log(data);
           };
           fetchPersons()
    },[])
  return (
    
    <div className="FollowerCard">
        <h3>People you may know </h3>

        {
            persons.map((person,id)=>{
                if (person._id !== user._id) 
                return ( 
                  <User person={person} key={id}/>
                )
            })
        }
    </div>


  )
}
