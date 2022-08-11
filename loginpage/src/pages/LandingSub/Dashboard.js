import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Menu from "./Menu";
import "./../css/Landing.css"

function Dashboard(){
    let navigate = useNavigate();
    
    const buttonpick = () =>{
        
        navigate('/landing/AddNew');
    }
    return(
        <div className="Landing">
            <Menu />
            <div>

                <div className="topbar">
                <button className="btn2" onClick={()=>buttonpick()} >
                ADD NEW
                </button>
                <button className="btn2">LOGOUT</button>  
                </div>
                
                <h2>Dashboard</h2>

            </div>
            
        </div>
        
    );

}

export default Dashboard;