import CardUtente from "./CardUtente"

function App() {
  const persone =[{
     name:"Esu",
     email:"ebdkw@gfwcv",
     imgUrl:"https://www.petdetective.it/wp-content/uploads/2016/04/gatto-toilette.jpg"
}]
  

  return (
    <>
     <CardUtente name="Esu"
     email="kbfbekfb"
     imgUrl="https://www.petdetective.it/wp-content/uploads/2016/04/gatto-toilette.jpg"></CardUtente>

     <CardUtente {...persone[0]}></CardUtente>
    
     <div className="row">
      {
        persone.map((p)=>{
          return(<div className="col-6"><CardUtente {...p}></CardUtente></div>)
        })
      }
     </div>
    </>
  )
}

export default App
