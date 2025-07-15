
// Crea un componente LoginForm.

import { useState } from "react"

// Usa due useState separati per gestire i campi email e password.

// Crea un form HTML con due input (uno per l'email, uno per la password) e un bottone "Login".

// Collega il valore di ogni input alla rispettiva variabile di stato e aggiornalo mentre l'utente digita.

// Quando il form viene inviato (al click del bottone),
// previeni il comportamento di default del form e mostra i valori di email e password in un alert.
// yek-ycpq-dcj

const LoginForm=()=>{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[messaggio,setMessaggio]=useState("")


    const gestioneDati=(evento)=>{
        console.log(evento);
        evento.preventDefault()

        setMessaggio("le credenziali sono:"+email +"password:" +password )
        
        
    }

    return(<div>
        <form>
            <h2>Login </h2>
            {messaggio}
            <div>
                <label>Email</label>
                <input type="email" required></input>
            </div>
             

             <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>setEmail(e.target.value)} required></input>
                <p></p>
            </div>

            <button className="btn btn-dark" onClick={gestioneDati}>Login </button>
        </form>
    </div>)

}

export default LoginForm