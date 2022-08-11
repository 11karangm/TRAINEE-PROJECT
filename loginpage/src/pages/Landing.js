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
                <button className="btn"  onClick={() => ButtonClickChange("Dashboard")}>
                <svg id="icon-a" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="-1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
                Dashboard </button>
                <button className="btn" onClick={() => ButtonClickChange("Messages")}>
                    <svg id="icon-b" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="-1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path></svg>
                    Messages </button>
                <button className="btn" onClick={() => ButtonClickChange("Account")}>
                <svg id="icon-c" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="-1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                    Account </button>
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