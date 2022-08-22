import React from "react";
import {Link, useNavigate} from "react-router-dom";
import pic from "./images/login_page.jpg"
import "./css/Login.css"
import { useState } from "react";






function Login() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [password, setpassword] = useState('')
    
    const handleChange = event => {
        setMessage(event.target.value);
    
        console.log('value is:', event.target.value);
      };

    const handleChange2 = event => {
        setpassword(event.target.value);
    
        console.log('value is:', event.target.value);
      };

    function loginClick () {
        if(message==="admin" && password==="admin"){
            navigate("/landing/Dashboard/1");
        }
    }
    return(
        <>
        <main>
        <div className="full">
            <img src={pic} alt="" />
            <div className="Form-Container">
                <h1>Login your account</h1>
                <input type="text" placeholder="Username" onChange={handleChange}/>
                <input type="text" placeholder="Password" onChange={handleChange2}/>
                <nav id="Lognav">
                <a onClick={loginClick} id="Logbutton">Login</a>
                </nav>
                <nav>
                <Link to="/password-reset">Forgot Password?</Link>
                </nav>
            </div>

        </div>
         
          
        </main>
        
      </>
    );
    
}
export default Login;