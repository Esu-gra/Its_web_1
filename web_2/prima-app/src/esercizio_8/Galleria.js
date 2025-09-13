import { useEffect } from "react";
import { useState } from "react";
import React from "react";

function GalleriaFoto(){
    const[foto,setFoto]=useState([])
    const[caricando,setCaricando]=useState(true)
    const[errore,setErrore]=useState(null)


    useEffect(()=>{
        const fetchFoto=async()=>{
            try{
                const risposta = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");

                if(!risposta.ok){
                    throw new Error("Errore nella risposta della rete")
                }
                const dati=await risposta.json();
                setFoto(dati)
                setCaricando(false)
            }catch(err){
               setErrore(err.message);
               setCaricando(false);
            }
        };
        fetchFoto();
    },[])


    if(caricando){
        return<p>Caricamento in corso...</p>
    }

    if(errore){
        return  <p>Errore:{errore}</p>
    }



    return(
        <div>
            <h2>Galleria Foto</h2>
            <div>
                {foto.map((f)=>(
                    <div >
                         <img
              key={f.id}
              src={f.thumbnailUrl}
              alt={f.title}
              style={{ width: "150px", borderRadius: "8px" }}
            />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleriaFoto;