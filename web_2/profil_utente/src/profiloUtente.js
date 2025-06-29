import "./ProfiloUtente.css";

const ProfiloUtente=({utente})=>{
    const mostraDettagli=()=>{
        alert(
      `Nome: ${utente.nome} ${utente.cognome}\nEtà: ${utente.eta}\nProfessione: ${utente.professione}\nEmail: ${utente.email}`
    );

    };

    return (
        <div className="card h-100 profilo-card shadow-sm ">
      <div className="card-headertext-center text-center  bg-primar text-white">
        <h5>{utente.nome} {utente.cognome}</h5>
      </div>
      <div className="card-body text-center">
        <span className="badge bg-prim mb-2">Età: {utente.eta}</span>
        <p>Professione: {utente.professione}</p>
        <p>Email: {utente.email}</p>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-sm btn-outline-info" onClick={mostraDettagli}>
          Mostra Dettagli
        </button>
      </div>
    </div>


    );
};

export default ProfiloUtente;