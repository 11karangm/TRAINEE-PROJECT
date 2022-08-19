import React from 'react'

const Post = ({posts}) => {
  return (
    <div>
        <ul>
            {posts.map(post => (
                <li key={post.id} className="list-group-items">
                    {post.firstName}
                </li>
                
            ))}
        </ul>
      
    </div>
  )
}

export default Post;
