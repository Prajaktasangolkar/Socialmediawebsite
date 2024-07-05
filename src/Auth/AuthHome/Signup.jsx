import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import "./Signup.css";
import axios from 'axios'

export const SignUp = () => {
  // const [username, setusername] = useState("");
  // const [firstname, setfirstname] = useState("");
  // const [lastname, setlastname] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const [confirmpassword, setconfirmpassword] = useState("");
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
});
const handleChange = (e) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value,
  });
};

  const handleSubmit =async (e) => {
             e.preventDefault();
             const { username, firstname, lastname, email, password, confirmpassword } = formData;

             if (username=="" || email=="" || firstname=="" || lastname=="" || password=="" || confirmpassword==""){
                   alert("All field are required")
             }
             if (password !== confirmpassword) {
              alert("Passwords do not match");
              return;
          }
             else{
              try {
                   const response=await axios.post("http://localhost:5000/auth/register",{
                    username:username,
                    firstname:firstname,
                    lastname:lastname,
                    email:email,
                    password:password,
                    confirmpassword:confirmpassword
                   });
                  
                   setFormData({
                    username: '',
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    confirmpassword: '',
                });
    

              } 
              catch (error) {
                 console.log('Signup failed ',error.response.data);
              }
             }
  };
  return (
    <div className="AuthHome">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>Sign up</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              className="infoInput"
              placeholder="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              className="infoInput"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
                <input
                type="password"
                 className="infoInput"
                name="confirmpassword"
                placeholder="Confirm Password"
                value={formData.confirmpassword}
                onChange={handleChange}
            />
          </div>
          <div>
            <span style={{ fontSize: "12px" }}>
              Already have an account.Login{" "}
            </span>
          </div>
          {/* <Link to='/login'> Login!</Link> */}
          <button
            className="button infoButton"
            type="submit"
           
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};
