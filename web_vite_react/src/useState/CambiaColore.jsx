import React, { useState } from "react";

function CambioColore() {
  const [colore, setColore] = useState("black"); // colore iniziale

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Testo che cambia colore */}
      <h1 style={{ color: colore }}>Ciao Mondo!</h1>

      {/* Bottoni */}
      <button
        onClick={() => setColore("red")}
        style={{
          backgroundColor: "red",
          color: "white",
          marginRight: "10px",
          padding: "8px 12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Rosso
      </button>

      <button
        onClick={() => setColore("green")}
        style={{
          backgroundColor: "green",
          color: "white",
          marginRight: "10px",
          padding: "8px 12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Verde
      </button>

      <button
        onClick={() => setColore("blue")}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "8px 12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Blu
      </button>
    </div>
  );
}

export default CambioColore;
