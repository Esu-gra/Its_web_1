import React from 'react'

function PostList({posts}) { 
    if(posts.length===0){
         return <p>Nessun post disponibile. Aggiungine uno!</p>;
    }

   return (
    <div>
      <h2>Lista dei Post</h2>
      {posts.map((post, index) => (
        <article
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{post.titolo}</h3>
          <p>{post.contenuto}</p>
        </article>
      ))}
    </div>
  );
}

export default PostList
