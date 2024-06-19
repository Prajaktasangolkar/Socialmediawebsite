import React, { useState, useRef } from "react";
import profileimage from "../../../assets/img/profileImg.jpg";
import "./PostShare.css";
import { MdInsertPhoto } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { GiCancel } from "react-icons/gi";

export const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange=(event)=>{
     if(event.target.files && event.target.files[0]){ 
      // if event is there if there then check 0th image in this event
      let img=event.target.files[0];
      setImage({
        image:URL.createObjectURL(img),
      });
     }
  }

  return (
    <div className="PostShare">
      <img src={profileimage} alt="" />
      <div>
        <input type="text" placeholder="What's happening?" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo" }}
          onClick={()=>imageRef.current.click()}
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
          <button className="button ps-button">Share</button>
          <div style={{display:'none'}}>
            <input type="file" name='myImage' ref={imageRef}  onChange={onImageChange}/>
          </div>
        </div>
        {
            image&&(
              <div className="previewImage">
                <GiCancel  onClick={(()=>setImage(null))}/>
                <img src={image.image} alt="" />
              </div>
            )
          }
      </div>
    </div>
  );
};
