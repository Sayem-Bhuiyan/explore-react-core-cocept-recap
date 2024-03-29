import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post.jsx";

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return(
        <div>
            {
                posts.map(post => <Post post_info = {post} />)
            }
        </div>
    )
}