
/*
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  function createPost() {
   alert("hi");
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
*/











/*import axios from "axios";
import React from "react"

const baseURL = "https://dummyjson.com/users";
const  Apple = () => {
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response&&response.users&&response.users);
      });
    }, []);

    const userdetails = [
        {
            firstName : post.firstName,
            lastName: post.lastName,
            maidenName: post.maidenName,
            age: post.age,
            gender: post.email,
            phone: post.phone,
            username: post.username,
            password: post.password,
            birthDate: post.birthDate,
            image: post.image,
            bloodGroup: post.bloodGroup,
            height: post.height,
            weight: post.weight
          
    
            
            
        }]
}

  
    
  


 


 */
