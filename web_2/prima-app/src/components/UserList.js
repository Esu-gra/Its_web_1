// import React from "react";
// import {Table,Button} from 'react-bootstrap';


// const UserList=({
//     utenti,modifica,elimina
// })=>{
//     if (utenti.length===0){
//         return <p>Nessun utente aggiunto</p>
//     }
//     return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Nome</th>
//           <th>Cognome</th>
//           <th>Email</th>
//           <th>Azioni</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user, index) => (
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>{user.name}</td>
//             <td>{user.surname}</td>
//             <td>{user.email}</td>
//             <td>
//               <Button variant="warning" className="me-2" onClick={() => onEdit(index)}>
//                 Update
//               </Button>
//               <Button variant="danger" onClick={() => onDelete(index)}>
//                 Delete
//               </Button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// }
// export default UserList;