import React ,{useState} from "react";
import Logo from "../../assets/img/logo.png";
import "./Login.css";
import axios from 'axios'
import { logIn } from "../../api/AuthRequest";
export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 
  
  const handleSubmit=async (e)=>{
                     e.preventDefault()
                     if (email=='' || password==""){
                        alert('required section')
                     }
                     try {
                         const response =await axios.post('http://localhost:5000/auth/login',{
                            email,
                            password
                         })
                         
                         console.log(response);
                     } catch (error) {
                        console.log("login failed",error.response.data);
                     }
  }
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
          <h3>Log In</h3>

          <div>
            <input
              type="email"
              className="infoInput"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
