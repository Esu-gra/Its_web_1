// import React from "react";
// import {Form,Button} from 'react-bootstrap';

// const UserForm=({form,cambio,inserire,modificare}
// )=>{
//     return(
//          <Form onSubmit={inserire}>
//       <Form.Group className="mb-3">
//         <Form.Label>Nome</Form.Label>
//         <Form.Control
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={cambio}
//           required
//           placeholder="Inserisci il nome"
//         />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Label>Cognome</Form.Label>
//         <Form.Control
//           type="text"
//           name="surname"
//           value={form.surname}
//           onChange={cambio}
//           required
//           placeholder="Inserisci il cognome"
//         />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Label>Email</Form.Label>
//         <Form.Control
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={cambio}
//           required
//           placeholder="Inserisci l'email"
//         />
//       </Form.Group>

//       <Button type="submit" variant="primary">
//         {modificare ? 'Aggiorna' : 'Aggiungi'}
//       </Button>
//     </Form>
//     )
// }

// export default UserForm;