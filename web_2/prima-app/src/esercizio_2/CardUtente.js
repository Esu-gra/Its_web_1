import React from "react";

function CardUtente(props){
    return(
        <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '250px',
      textAlign: 'center',
      margin: '10px'
    }}>
            <img src={props.imgUrl} alt="avatar utente"></img>
           < h2>{props.nome}</h2>
           <p>{props.email}</p>
        </div>
        
    );
};

export default CardUtente