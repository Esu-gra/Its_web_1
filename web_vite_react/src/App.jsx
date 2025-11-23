
// import SkillSelector from "./checkbox/skilselettor"
import SkillSelector from "./checkbox/skilselettor"
import Checkbox from "./esercizi_ottobre/Checkbox"
import CambioColore from "./useState/CambiaColore"
import InputLive from "./useState/InputLive"
// import MainComponent from "./useContent/MainContent"
// import CardUtente from "CardUtente/CardUtente"
import MostraNascondi from "./useState/MostraNascondi"
import PizzaSelector from "./useState/PizzaSelector"


function App() {



  return (
    <div style={{display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",}}>
      
    {/* <TodoApp></TodoApp> */}
    {/* <MainComponent></MainComponent> */}
    {/* <SkillSelector></SkillSelector> */}
   
     
     {/* <CardUtente name="Esu"
     email="kbfbekfb"
     imgUrl="https://www.petdetective.it/wp-content/uploads/2016/04/gatto-toilette.jpg"></CardUtente>

     {/* <CardUtente {...persone[0]}></CardUtente> */}
    
     {/* <div className="row">
      {
        persone.map((p)=>{
          return(<div className="col-6"><CardUtente {...p}></CardUtente></div>)
        })
    //   }
    //  </div> */} 
      <div style={{ display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        marginBottom: "40px"
  }}>

        {/* QUI i tuoi componenti reali */}
          <div><PizzaSelector /></div>
          <div><InputLive /></div>
          <div> <CambioColore /></div>
          <div> <MostraNascondi></MostraNascondi></div>
          <div><SkillSelector /></div>
        
          
       </div>
   
    </div>
  )
}

export default App
