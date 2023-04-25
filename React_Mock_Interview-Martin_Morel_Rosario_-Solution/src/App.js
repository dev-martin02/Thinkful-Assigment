import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

/*
 https://jsonplaceholder.typicode.com/posts is an API that contains an Array of objects, each of which has four properties. 
   Task
     - Display the Title and Body properties from the API
     - Onclick the BODY will fetch a new API to display the comments
       * Comment's API https://jsonplaceholder.typicode.com/posts/${postId}/comments
       * Each post has 5 comments 
       * A COMMENT should ONLY be SHOW if we CLICK his POST BODY 
       * Display commenter's email
       
  Keep in mind - 
    The postId (number) is the missing key in other to complete the comment's url
    The post will be displayed once I enter the ID       
*/

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div className="App">
       {posts.map((post) => {
        return <PostDetail post={post}/>
      })}
    </div>
  );
}

export default App;