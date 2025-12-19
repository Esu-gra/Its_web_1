import { useState,useEffect } from "react";
import React from "react";

function UserPlaceolder() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    if (selectedUser !== "") {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${selectedUser}`)
        .then(res => res.json())
        .then(data => setAlbums(data));
    }
  }, [selectedUser]);

  useEffect(() => {
    if (selectedAlbum !== "") {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbum}`)
        .then(res => res.json())
        .then(data => setPhotos(data));
    }
  }, [selectedAlbum]);

  return (
    <div>
      <h2>Utenti</h2>
      <select onChange={e => setSelectedUser(e.target.value)}>
        <option value="">Seleziona utente</option>
        {users.map(u => (
          <option key={u.id} value={u.id}>{u.name}</option>
        ))}
      </select>

      <h2>Album</h2>
      <select onChange={e => setSelectedAlbum(e.target.value)}>
        <option value="">Seleziona album</option>
        {albums.map(a => (
          <option key={a.id} value={a.id}>{a.title}</option>
        ))}
      </select>

      <h2>Foto</h2>
      <div>
        {photos.map(p => (
          <img
            key={p.id}
            src={p.thumbnailUrl}
            alt={p.title}
          />
        ))}
      </div>
    </div>
  );
}

export default UserPlaceolder