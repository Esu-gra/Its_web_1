import { useState } from "react";

function ModuloContatti() {
  const [datiForm, setDatiForm] = useState({
    nome: "",
    email: "",
    messaggio: ""
  });

  // Gestione cambiamenti nei campi con un'unica funzione
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatiForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Gestione submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dati inviati:", datiForm);

    // Reset form dopo invio
    setDatiForm({
      nome: "",
      email: "",
      messaggio: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Modulo Contatti</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={datiForm.nome}
          onChange={handleChange}
          placeholder="Inserisci il tuo nome"
          style={{ width: "100%", padding: "8px" }}
          required
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={datiForm.email}
          onChange={handleChange}
          placeholder="Inserisci la tua email"
          style={{ width: "100%", padding: "8px" }}
          required
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Messaggio:</label>
        <textarea
          name="messaggio"
          value={datiForm.messaggio}
          onChange={handleChange}
          placeholder="Scrivi il tuo messaggio..."
          rows="4"
          style={{ width: "100%", padding: "8px" }}
          required
        />
      </div>

      <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
        Invia
      </button>
    </form>
  );
}

export default ModuloContatti;
