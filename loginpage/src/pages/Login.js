import React from "react";
import {Link} from "react-router-dom";
import pic from "./images/login_page.jpg"
import "./css/Login.css"

function Login() {
    return(
        <>
        <main>
        <div className="full">
            <img src={pic} alt="" />
            <div className="Form-Container">
                <h1>Login your account</h1>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <button>Login</button>
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