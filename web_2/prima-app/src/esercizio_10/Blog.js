
import { useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";



function Blog(){
    const[posts,setPosts]=useState([]);
    



    const aggiungiPost=(nuovoPost)=>{
        setPosts([...posts,nuovoPost])
    };


    return(
        <div  style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>
                Mini Blog
            
                <PostForm aggiungiPost={aggiungiPost}></PostForm>
                <PostList posts={posts}/>
            </h1>

        </div>
    );
}

export default Blog;