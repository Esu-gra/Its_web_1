import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';
import Clock from './Clock';



// function getdate(date){
//   return   date.toLocaleDateString()+" "+date.toLocaleTimeString()
// }



function App() {
  let nome="Esu"
  return (
    <div className="App">
      <h1>Prima App React: {nome}</h1>
      <Componente1></Componente1>
      <Componente1/>
      
      <h2>
        {
          new Date().toLocaleDateString()+"  "+new Date().toLocaleTimeString()}
      </h2>
     
      <Clock/>
      <Clock timzeone="-6" country="USA"></Clock>
      <Clock timezone="36" country="Italy"></Clock>
      <Clock timeone="16" country="Japan"></Clock>
    </div>
  );
}

export default App;
