import React from "react";
import { Link } from "react-router-dom";
import "./css/Landing.css"
import { useState } from "react";
import Dashboard from "./LandingSub/Dashboard";
import Messages from "./LandingSub/Messages";
import Account from "./Account";

function Landing () {

    const [state,setState] = useState("");
    const ButtonClickChange = (choice) => {
        setState(choice);
    }

    const renderMainPage = () =>{
        if(state==="Dashboard"){return <Dashboard />;}
        if(state==="Messages"){return <Messages />;}
        if(state==="Account"){return <Account/>;}
    }

    return(
        <div className="LandingPage">
            <div className="menu"> 
                <button onClick={() => ButtonClickChange("Dashboard")}>Dashboard </button>
                <button onClick={() => ButtonClickChange("Messages")}>Messages </button>
                <button onClick={() => ButtonClickChange("Account")}>Account </button>
            </div>
            <div className="Result">
                <button>Add New</button>
                <button>Log Out</button>
                {renderMainPage()}

            </div>

            
        </div>
    );
}

export default Landing;