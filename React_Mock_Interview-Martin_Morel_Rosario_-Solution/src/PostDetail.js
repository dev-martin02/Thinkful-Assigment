import React, { useState, useEffect } from "react";

/*
OnClick the page will have to fetch for the new ID 
*/

function PostDetail({ post }){
  const[comments, setComments] = useState([])
  const [showComments, setShowComments] = useState(false);

  
  fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
  
  
  return(
 <div>
      <h2>{post.title}</h2>
      <p onClick={() => setShowComments(true)}>{post.body}</p>
      {showComments && (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <p>{comment.body}</p>
              <p>{comment.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PostDetail