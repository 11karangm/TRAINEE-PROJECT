import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Menu from "./LandingSubComponents/Menu";
import "./../css/Landing.css"
import DarkExample from "./LandingSubComponents/Table";

function Dashboard(){
    let navigate = useNavigate();
    
    const buttonpick = () =>{
        
        navigate('/landing/AddNew');
    }

    const buttonpick2 = () =>{
        
        navigate('/');
    }

    return(
        <div className="Landing">
            <Menu />
            <div>

                <div className="topbar">
                    <button className="btn2" onClick={()=>buttonpick()} >
                    ADD NEW
                    </button>
                    <button className="btn2" onClick={()=>buttonpick2()}>LOGOUT</button>  
                </div>
                
                <h2 id="welcome-message">Welcome Back</h2>
                <div className="taable">
                <DarkExample />
                
                </div>
                

            </div>
            
        </div>
        
    );

}

export default Dashboard;