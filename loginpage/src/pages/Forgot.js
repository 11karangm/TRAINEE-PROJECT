import React from "react";


import "./css/Login.css"

import pic from "./images/forgot_pass.jpg"

function Forgot () {
    return(
        <>
        <main>
          <div className="full">
            <img src={pic} alt=""/>
            <div className="Form-Container"  id="formforgot">
              <h1 id="forgot">Forgot Password</h1>
              <p id="forgotemail">Enter your email and we'll send you a link to reset your password</p>
              <input type="text" placeholder="Email Adress" />
              
              <button id="forgot-button">Submit</button>

            </div>
          

          </div>
          
        </main>
        
      </>
    );
    
}
export default Forgot;