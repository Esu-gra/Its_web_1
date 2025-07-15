import './App.css';
import './cambioNome';
import Esercizio5 from './Esercizio5';
import LoginForm from './LoginForm';

// import CleanApp from './CleanApp';
// import FetchComponents from './FetchComponents';

function App() {
  let nome = "Esu";
  return (
    <div className="App">
      
      <h1>Prima App React: {nome}</h1>
     
      {/* <CleanApp /> */}
      {/* <FetchComponents /> */}
      <LoginForm></LoginForm>
      <Esercizio5></Esercizio5>
  
    </div>
  );
}

export default App;
