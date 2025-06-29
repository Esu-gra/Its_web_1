import "./App.css";
import Clock from "./Clock";
import Componente1, { Anagrafica, Messaggio } from "./Componente1";
import Persona from "./Esercizi/esercizio1";
import { persone } from "./dati/dati";

function App() {
  let nome = "Roberto";
  
  const data = new Date();
  const clicca=()=>{

    alert("Cliccato da ");
  }
  return (
    <div className="App">
      <h1>Prima App React {nome}</h1>
      <Persona></Persona>
      <Anagrafica></Anagrafica>
      <Messaggio></Messaggio>
      {persone.map((persona) => {
        return <Componente1 key={persona.id} {...persona} onCliccami={clicca}></Componente1>;
      })}
     
      <h2>{data.toLocaleDateString() + " " + data.toLocaleTimeString()}</h2>
      <Clock timezone="-6" country="USA"></Clock>
      <Clock timezone="0" country="Italy"></Clock>
      <Clock timezone="7" country="Japan"></Clock>
    </div>
  );
}

export default App;
