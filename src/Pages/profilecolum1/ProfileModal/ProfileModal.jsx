import { Modal, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../../redux/actions/uploadAction.js";
import {updateUser} from '../../../redux/actions/userActions.js'
import * as UserApi from '../../../redux/API/UserRequest.js'

function ProfileModal({ modalOpened, setModalOpened ,data}) {
  const theme = useMantineTheme();
  const {password,...other}=data;
  const[formData,setFormData]=useState(other)
  const [profileImage,setprofileImage]=useState(null)
 const [coverImage,setcoverImage]=useState(null)
 const dispatch=useDispatch()
 const param=useParams()
 const [profileUser, setprofileUser] = useState({});
 const {user}=useSelector((state)=>state.authReducer.data)
 const handleChange=(e)=>{
  // e.preventDefault()
  setFormData({...formData,[e.target.name]:e.target.value})
  console.log('setFormData ProfileModal',setFormData);
 }
 const userId = JSON.parse(localStorage.getItem("store"));
  console.log(userId.authReducer.data.user._id, "userId");
  const profileUserId = param.id; 

  useEffect(() => {
    const fetchProfileUser = async () => {
      const profileUser = await UserApi.getUserApi(profileUserId);
      setprofileUser(profileUser);
      console.log("profileUserr", profileUser);
    };
    fetchProfileUser();
  }, []);
console.log('profileuserr',profileUser);
 const onImageChange =(event)=>{
   if(event.target.files && event.target.files[0]){
    let img=event.target.files[0];
     event.target.name==='profileImage'
     ? setprofileImage(img)
     :setcoverImage(img);
   }
 };

 const handleSubmit=async (e)=>{
    e.preventDefault()
    let UserData=formData;
    if (profileImage){
      const data=new FormData();
      const filename=Date.now()+profileImage.name;
      // eslint-disable-next-line react/prop-types
      data.append("name",filename)
      data.append('file',profileImage)
      UserData.profilePicture=filename
      try {
         await dispatch(uploadImage(data))
      } catch (error) {
         console.log(error);
      }
    }
    if (coverImage){
      const data=new FormData();
      const filename=Date.now()+coverImage.name;
      data.append("name",filename)
      data.append('file',coverImage)
      UserData.coverPicture=filename;
      try {
        await dispatch(uploadImage(data))
      } catch (error) {
         console.log(error);
      }
    }
    dispatch(updateUser(param.id,UserData));
    setModalOpened(false)

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