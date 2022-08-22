import React, { useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Menu from "../LandingSubComponents/Menu";
import "../../css/Landing.css"
import DarkExample from "../LandingSubComponents/Table";
import axios from "axios";
import "../../css/Pagination.css"
import Pagination from "./pagination";





function Dashboard(){
//Variables for navigating Pagination
    const params = useParams();
    const [currentPage, setCurrentPage] = useState(0);
    const [postPerPage, setPostPerPage] = useState(5)

//Fetching JSON Data
    const baseURL = "https://dummyjson.com/users?limit=5&skip=0";

    const [post, setPost] = React.useState();
  
    React.useEffect(() => {
      axios.get(`https://dummyjson.com/users?limit=5&skip=${(params.pageNo-1)*5}`).then((response) => {
        console.log("Data->>>",post)
        setPost(response&&response.data.users&&response.data.users);
      });
    }, [currentPage]);

//Get Current Data

const indexOfLastPost = currentPage*postPerPage;
const indexOfFirstPost = indexOfLastPost-postPerPage;
//const currentPost = post&&post.slice(indexOfFirstPost,indexOfLastPost);
//console.log("data-->",currentPost)

//Navigating Page

const paginate = pageNumber => {
    setCurrentPage(pageNumber-1);
}


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
                <Pagination paginate={paginate}/>

                
                </div>

                
                

            </div>
            
        </div>
        
    );

}

export default Dashboard;