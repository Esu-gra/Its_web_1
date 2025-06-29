import React from "react";
import ProfiloUtente from "./profiloUtente.js";
import utenti from "./datiUtenti.js"
import  'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./ProfiloUtente.css";


const App=() =>{
  const gruppiUtenti=[];
  for (let i=0;i<utenti.length;i+=3){
    gruppiUtenti.push(utenti.slice(i,i+3));
  }

  return(
       <div className="container div-container mt-4">
        <nav className="navbar navbar-dark bg-dar mb-4">
    <div className="container">
      <span className="navbar-brand mx-auto h1">Gestione Profili Utente</span>
    </div>
  </nav>

  <div className="container">
    <h2 className="text-center  mb-5 title"> Lista degli Utenti</h2>
   
  </div>
      {gruppiUtenti.map((gruppo, index) => (
        <div className="row mb-4" key={index}>
          {gruppo.map((utente) => (
            <div className="col-md-4" key={utente.id}>
              <ProfiloUtente utente={utente} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
