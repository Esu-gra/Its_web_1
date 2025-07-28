
function getDati(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            prova="pippo"
            resolve({nome:"esu",cognoome:"Del"});
        },2000)
    })
}


function getProdotti(){
    return new Promise((resolve,reject)=>{
        if(prodotti>5){

        
      setTimeout(()=>{
        
            resolve(30);
        },2000)
      
    }else{
        console.log("non ci sono dati");
        
    }
})
}

console.log("Istruzzione 1");
let dati=getDati()
dati.then(ris=>console.log(ris)
)

console.log("istruzione 3");

Promise.all([getDati(),getProdotti()]).then()