import React, { useState, useRef } from "react";
import profileimage from "../../../assets/img/profileImg.jpg";
import "./PostShare.css";
import { MdInsertPhoto } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { GiCancel } from "react-icons/gi";
import { useSelector,useDispatch } from "react-redux";
import {uploadImage,uploadPost} from '../../../redux/actions/uploadAction.js'

export const PostShare = () => {
  const loading=useSelector((state)=>state.uploadReducer.uploading)
  
  // console.log('loading',loading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      // if event is there if there then check 0th image in this event
      let img = event.target.files[0];
      setImage(img);
    }
  };
   const serverPublic='http://localhost:5000/images/';
  const dispatch=useDispatch()
  const user = useSelector((state) => state.authReducer.data.user);
  // console.log('state id',user);
  const reset=()=>{
    setImage(null);
    desc.current.value='';
  }
  const desc=useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost={
      userId:user._id,
      desc:desc.current.value
    }
    if (image){
      const data=new FormData();
      const filename=Date.now()+image.name;
      data.append("name",filename)
      data.append('file',image)
    
      newPost.image=filename
      try {
         dispatch(uploadImage(data))
      } catch (error) {
         console.log(error);
      }
    }
    dispatch(uploadPost(newPost))
    reset()
  };

  return (
    <div className="PostShare">
      <img src={user.coverPicture ?serverPublic+user.profilePicture :serverPublic+"defaultProfile.png" } alt="" />
      <div>
        <input type="text" placeholder="What's happening?"
        ref={desc}
        required
         />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo" }}
            onClick={() => imageRef.current.click()}
          >
            <MdInsertPhoto />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video" }}>
            <MdOutlineVideoLibrary />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location" }}>
            <FaLocationDot />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule" }}>
            <SlCalender />
            Schedule
          </div>
          <button className="button ps-button" onClick={handleSubmit} disabled={loading}>
            {loading? "Uploading...":"Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}

            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <GiCancel onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
