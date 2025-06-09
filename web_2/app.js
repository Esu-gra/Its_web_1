console.log("node")

const  arr=[1,3,2]

arr.push(4)

console.log(arr)

const a=4


// tipo priimitivo  ----> valore
// oggetto ---> riferimento

arr1=[1,2]
arr3=arr1
console.log((arr3));
arr1.push(4)
console.log((arr3));



arr4=[...arr1]
arr4.unshift(arr1,arr3)

// ome scrivere un oggetto 

const prof ={
    nome:"Roberto",
    cognome:"Delisio",
    eta:48
}
console.log(prof.nome)

const prof2 ={
"first name":"Roberto",
    cognome:"Delisio",
    eta:48,
    indirizzo:{
        via:"Cesasre Pavese",
        civico:"456"
    }
}

console.log(prof2["first name"]);


const prof3=new Object()
prof3.nome="bob"
prof3.cognome="Annibale"

console.log(prof3)




// funzioni costruttori di un oggetto


function Persona(nome,cognome){
    this.nome=nome
    this.cognome=cognome
}

const esu=new Persona("Bob","Coco")

console.log(esu);



// protoType

Persona.prototype.telefono="239028334"
console.log(esu.telefono);



// dichiarazione
console.log("dichiarazione")
list(arr1)  // ci permette di usare la funzione prima della dichiarazione la
            // stessa cosa quando inizializziamo con la keyword var

function list(){
    console.log("argomenti",arguments);
}

console.log(pippo)
var pippo="bbbbbb" //non da errore ma undefind