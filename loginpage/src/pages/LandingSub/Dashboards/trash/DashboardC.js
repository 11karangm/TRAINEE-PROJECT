import React from "react";
import {Link, useNavigate, useParams,useState} from "react-router-dom";
import Menu from "../LandingSubComponents/Menu";
import "../../css/Landing.css"
import DarkExample from "../LandingSubComponents/Table";
import axios from "axios";
import "../../css/Pagination.css"



function DashboardC(){

    const baseURL = "https://dummyjson.com/users?limit=5&skip=15";

    const [post, setPost] = React.useState();
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        console.log("Data->>>",response)
        setPost(response&&response.data.users&&response.data.users);
      });
    }, []);


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
                <DarkExample users={post}/>
                
                </div>

                <div className="pages">
                    <nav>
                        <ul className="pages-list">
                            <li>
                            <Link to="/landing/Dashboard/3">Prev</Link>
                            </li>
                            <li>
                            <Link to="/landing/Dashboard/4">4</Link>
                            </li>
                            <li>
                            <Link to="/landing/Dashboard/5">5</Link>
                            </li>
                            <li>
                            <Link to="/landing/Dashboard/6">6</Link>
                            </li>
                            <li>
                            <Link id="nextpage" to="/landing/Dashboard/5">Next</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                

            </div>
            
        </div>
        
    );

}

export default DashboardC;