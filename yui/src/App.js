
//import './App.css';


import React ,{ useState , useEffect } from 'react'
import axios from 'axios';
import Post from './Components/Post';
import Pagination from './Components/Pagination';


const App = () => {
  const [post, setPost] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const url = "https://dummyjson.com/users"

  useEffect (() => {
    axios.get(url).then((response)=>{
      setPost(response&&response.data.users&&response.data.users);

    });
  },[]);

  //Change page

  const paginate = pageNumber => setCurrentPage(pageNumber);

  //Get current post

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = post.slice(indexOFirstPost,indexOfLastPost);

  console.log(post)
  return (
    <div className='container mt-5 '>
      <h1 className='text-primary mb-3 '>Content</h1>
      <Post posts={currentPost} />
      <Pagination postsPerPage={postsPerPage}  totalPosts = {post.length} paginate = {paginate} />

    </div>
  );
};

export default App;
