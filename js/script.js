function persona(nome,cognome) {
this.nome = nome;
this.cognome = cognome;
this.indirizzo = "";
this.email = "";
this.mostraNomeCompleto = function() {
    return this.nome +' '+ this.cognome;
    
};
this.calcolaCodiceFiscale = function() {
    console.log(this.calcolaCodiceFiscale);
    
};
}


let p1= new persona("Esu","Grappa")
console.log(p1.mostraNomeCompleto());
