import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../../redux/actions/uploadAction.js";
function ProfileModal({ modalOpened, setModalOpened ,data}) {
  const theme = useMantineTheme();
  const {password,...other}=data;
  const[formData,setFormData]=useState(other)
  const [profileImage,setprofileImage]=useState(null)
 const [coverImage,setcoverImage]=useState(null)
 const dispatch=useDispatch()
 const param=useParams()
 const {user}=useSelector((state)=>state.authReducer.data)
 const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
 }

 const onImageChange =(event)=>{
   if(event.target.files && event.target.files[0]){
    let img=event.target.files[0];
     event.target.name==='profileImage'
     ? setprofileImage(img)
     :setcoverImage(img);
   }
 };

 const handleSubmit=(e)=>{
    e.preventDeafault()
    let UserData=formData;
    if (profileImage){
      const data=new FormData();
      const filename=Date.now()+profileImage.name;
      data.append("name",filename)
      data.append('file',profileImage)
      UserData.profileImage=filename
      try {
         dispatch(uploadImage(data))
      } catch (error) {
         console.log(error);
      }
    }
    if (coverImage){
      const data=new FormData();
      const filename=Date.now()+coverImage.name;
      data.append("name",filename)
      data.append('file',coverImage)
      UserData.coverImage=filename
     
      try {
         dispatch(uploadImage(data))
      } catch (error) {
         console.log(error);
      }
    }
 }
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstname}
          />

          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="LIves in"
            onChange={handleChange}
            value={formData.livesin}
          />

          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={formData.country}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
            name='relationship'
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>


        <div>
            Profile Image 
            <input type="file" name='profileImage' onChange={onImageChange}/>
            Cover Image
            <input type="file" name="coverImage"  onChange={onImageChange}/>
        </div>

        <button className="button infoButton" onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;