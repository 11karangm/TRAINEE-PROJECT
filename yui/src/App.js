
//import './App.css';


import React ,{ useState , useEffect } from 'react'
import axios from 'axios';
import Post from './Components/Post';
import Pagination from './Components/Pagination';
import { Route,Routes } from 'react-router-dom';
import ProfilePage from './profile';


const App = () => {
  const [post, setPost] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(5);
  //const url = "https://dummyjson.com/users?limit=5&skip=5";

  useEffect (() => {
    axios.get(`https://dummyjson.com/users?limit=5&skip=${currentPage*5}`).then((response)=>{
      console.log("data=",post);
      setPost(response&&response.data.users&&response.data.users);

    });
  },[currentPage]);

  //Change page

  const paginate = pageNumber => {setCurrentPage(pageNumber-1); console.log(currentPage);}

  //Get current post

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOFirstPost = indexOfLastPost - postsPerPage;
  //const currentPost = post.slice(indexOFirstPost,indexOfLastPost);

  //console.log(post)

  //page number declaration



  
  
    return (
      <Routes>
        <Route path="users">
          <Route path=":userId" element={<ProfilePage />} />
          <Route path="me" element={1+2} />
        </Route>
      </Routes>
    );
  //<Pagination paginate = {paginate} />

};



export default App;
