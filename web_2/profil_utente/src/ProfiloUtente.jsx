
import "./ProfiloUtente.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProfiloUtente = ({ utente }) => {
  const mostraDettagli = () => {
    alert(`ID: ${utente.id}\nNome: ${utente.nome} ${utente.cognome}\nEtà: ${utente.eta}\nProfessione: ${utente.professione}\nEmail: ${utente.email}`);
  };

  return (
    <div className="card h-100 profilo-card shadow-sm">
       <div className="card-body text-center">
        <span className="badge bg-white mb-2">
          <i className="badge bg-info mb-2"></i> Età: {utente.eta}
        </span>
        <p className="mb-1">
          <i className="fas fa-briefcase me-1"></i>
          <strong>Professione:</strong> {utente.professione}
        </p>
        <p className="mb-0">
          <i className="fas fa-envelope me-1"></i>
          <strong>Email:</strong> {utente.email}
        </p>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-primary btn-sm" onClick={mostraDettagli}>
          Mostra Dettagli
        </button>
      </div>
    </div>
  );
};

export default ProfiloUtente;