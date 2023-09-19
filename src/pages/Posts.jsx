import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";

export default function Posts({token}) {
    // See a list of all Posts
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchData() {
        const { data } = await fetchAllPosts();
        setPosts(data.posts);
        }
        fetchData();
      },[])
      console.log(posts)
    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post)=>(
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    <p>{post.location}</p>
                    <p>{post.willDeliver}</p>
                    <br></br>
                </div>
            ))}
        </div>
    )
}