import React, { useEffect, useState } from 'react';

const CleanApp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const dimensione = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", dimensione);

    // Pulizia dell'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("resize", dimensione);
    };
  }, []); // solo una volta al mount

  return <h1>{size}</h1>;
};

export default CleanApp;
