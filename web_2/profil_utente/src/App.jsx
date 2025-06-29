import React from "react";
import ProfiloUtente from "./ProfiloUtente.";
import utenti from "./datiUtenti";
import "./ProfiloUtente.css";

const App = () => {
  const suddividiInRighe = (arr, grandezza) => {
    const righe = [];
    for (let i = 0; i < arr.length; i += grandezza) {
      righe.push(arr.slice(i, i + grandezza));
    }
    return righe;
  };

  const righe = suddividiInRighe(utenti, 3);

  return (
    <div className="container mt-4">
      {righe.map((riga, idx) => (
        <div className="row mb-4" key={idx}>
          {riga.map((utente) => (
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