// import { useState } from 'react';
import './App.css';
// import {news } from './newsData';
import './styles.css';
// import Card  from './Card';

// import CleanApp from './CleanApp';
// import FetchComponents from './FetchComponents';


// esercizio_1
import Saluto from './esercizio_1/Saluto';

// esercizio_2
import CardUtente  from './esercizio_2/CardUtente';


// esercizio_3
import MenuRistorante from './esercizio_3/MenuRistorante';


// esercizio_4
import Termostato from './esercizio_4/Termostato';

// esercizio_5
import CampoRicerca from './esercizio_5/CampoRicerca';


// esercizio_6
import MessaggioSegreto from './esercizio_6/MessaggioSegreto';


// esercizio_7
import AggiornaTitolo from './esercizio_7/AggiornaTitolo';

// esercizio_8
import GalleriaFoto from './esercizio_8/Galleria';
import ModuloContatti from './esercizio_9/ModuloContatti';
import Blog from './esercizio_10/Blog';
import TodoApp from './esercizio_11/TodoApp';


function App() {
 
  return (
    <div className="App">
      
      {/* <h1>Prima App React: {nome}</h1> */}
       {/* <FetchComponents></FetchComponents> */}
      {/* <CleanApp /> */}
      {/* <FetchComponents /> */}
      {/* <LoginForm></LoginForm>
      <Esercizio5></Esercizio5>
   */}
       <Saluto></Saluto>
       
       <CardUtente  
       imgUrl="https://placehold.co/100x100"
       nome="Mario"
       email="esu@hhsw.com"/>
       <CardUtente  
       imgUrl="https://placehold.co/100x100"
       nome="Giuseppe"
       email="giuu@hhsw.com"/>
       
      <MenuRistorante/>
      <Termostato></Termostato>

      <CampoRicerca></CampoRicerca>

      <MessaggioSegreto></MessaggioSegreto>
      <AggiornaTitolo></AggiornaTitolo>

        <GalleriaFoto></GalleriaFoto>
       <ModuloContatti></ModuloContatti>
       <Blog></Blog>

      <TodoApp></TodoApp>
    </div>
  );
}


//   const [darkMode,setDarkMode]=useState(false);
//   const[mostraNews,setMostraNews]=useState(true);


//   return(
//      <div className={`main-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
//       <div className="buttons mb-3">
//         <button className="btn btn-primary me-2" onClick={() => setDarkMode(!darkMode)}>
//           Cambia Colori
//         </button>
//         <button className="btn btn-secondary" onClick={() => setMostraNews(!mostraNews)}>
//           {mostraNews ? 'Nascondi' : 'Visualizza'} News
//         </button>
//       </div>

//       {mostraNews && news.map(item => (
//         <Card key={item.id} {...item} dark={darkMode} />
//       ))}
//     </div>
//   );

  
// }

// import React, { useState } from 'react';
// import UserForm from './UserForm';
// import UserList from './UserList';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({ name: '', surname: '', email: '' });
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editingIndex !== null) {
//       const updatedUsers = [...users];
//       updatedUsers[editingIndex] = formData;
//       setUsers(updatedUsers);
//       setEditingIndex(null);
//     } else {
//       setUsers([...users, formData]);
//     }
//     setFormData({ name: '', surname: '', email: '' });
//   };

//   const handleEdit = (index) => {
//     setFormData(users[index]);
//     setEditingIndex(index);
//   };

//   const handleDelete = (index) => {
//     const filteredUsers = users.filter((_, i) => i !== index);
//     setUsers(filteredUsers);
//     if (editingIndex === index) {
//       setFormData({ name: '', surname: '', email: '' });
//       setEditingIndex(null);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>{editingIndex !== null ? 'Modifica Utente' : 'Aggiungi Utente'}</h2>

//       <UserForm
//         formData={formData}
//         onChange={handleChange}
//         onSubmit={handleSubmit}
//         isEditing={editingIndex !== null}
//       />

//       <hr className="my-4" />

//       <h3>Lista Utenti</h3>
//       <UserList
//         users={users}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />
//     </div>
    
//   );
  
// }

export default App;