import React, { useState } from "react";

function PostForm({ aggiungiPost }) {
  const [titolo, setTitolo] = useState("");
  const [contenuto, setContenuto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titolo.trim() === "" || contenuto.trim() === "") return;

    aggiungiPost({ titolo, contenuto });
    setTitolo("");
    setContenuto("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Titolo"
        value={titolo}
        onChange={(e) => setTitolo(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px", width: "300px" }}
      />
      <textarea
        placeholder="Contenuto"
        value={contenuto}
        onChange={(e) => setContenuto(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px", width: "300px", height: "80px" }}
      />
      <button
        type="submit"
        style={{ padding: "8px 16px", background: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}
      >
        Aggiungi Post
      </button>
    </form>
  );
}

export default PostForm;
