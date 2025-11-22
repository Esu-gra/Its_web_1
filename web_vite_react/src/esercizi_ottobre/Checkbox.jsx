import React, { useEffect, useState } from 'react';

function Checkbox() {

    const skills = [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "React" },
        { id: 3, name: "Vue" },
        { id: 4, name: "Angular" },
        { id: 5, name: "TypeScript" },
        { id: 6, name: "Node.js" },
        { id: 7, name: "PHP" },
        { id: 8, name: "Laravel" },
        { id: 9, name: "WordPress" },
        { id: 10, name: "CSS / SASS" }
    ];

    const [selected, setSelected] = useState([]);

    // aggiungi o rimuovi id
    const toggleSkill = (id) => {
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    // useEffect per il limite massimo
    useEffect(() => {
        if (selected.length > 5) {
            alert("Puoi selezionare solo 5 skills!");
        }
    }, [selected]); 

    // resetta
    const resetAll = () => {
        setSelected([]);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>

            {/* COUNter*/}
            <h2 style={{ color: selected.length > 5 ? "red" : "black" }}>
                Selezionate: {selected.length} su 10
            </h2>

            {/* lista checknox */}
            <div style={{ marginBottom: "20px" }}>
                {skills.map(skill => (
                    <label
                        key={skill.id}
                        style={{
                            display: "block",
                            margin: "5px 0",
                            fontWeight: selected.includes(skill.id) ? "bold" : "normal",
                            color: selected.includes(skill.id) ? "green" : "black"
                        }}
                    >
                        <input
                            type='checkbox'
                            checked={selected.includes(skill.id)}
                            onChange={() => toggleSkill(skill.id)}
                        />
                        {" "}
                        {skill.name}
                    </label>
                ))}
            </div>

            {/* RESET */}
            <button onClick={resetAll}>Reset</button>

        </div>
    );
}

export default Checkbox;


// la versione di chatt
// import React, { useEffect, useState } from "react";

// function Checkbox() {
//   const skills = [
//     { id: 1, name: "JavaScript" },
//     { id: 2, name: "React" },
//     { id: 3, name: "Vue" },
//     { id: 4, name: "Angular" },
//     { id: 5, name: "TypeScript" },
//     { id: 6, name: "Node.js" },
//     { id: 7, name: "PHP" },
//     { id: 8, name: "Laravel" },
//     { id: 9, name: "WordPress" },
//     { id: 10, name: "CSS / SASS" }
//   ];

//   const [selected, setSelected] = useState([]);
//   const [limitReached, setLimitReached] = useState(false);

//   const toggleSkill = (id) => {
//     // Se ho già raggiunto il limite e sto aggiungendo, blocco
//     if (selected.length >= 5 && !selected.includes(id)) {
//       setLimitReached(true);
//       return;
//     }

//     if (selected.includes(id)) {
//       setSelected(selected.filter((item) => item !== id));
//     } else {
//       setSelected([...selected, id]);
//     }
//   };

//   useEffect(() => {
//     if (selected.length <= 5) {
//       setLimitReached(false);
//     }
//   }, [selected]);

//   const resetAll = () => {
//     setSelected([]);
//     setLimitReached(false);
//   };

//   return (
//     <div
//       style={{
//         padding: "20px",
//         fontFamily: "Arial",
//         transition: "0.4s",
//         backgroundColor: selected.length > 0 ? "#f0f8ff" : "white"
//       }}
//     >
//       <h2
//         style={{
//           color: selected.length > 5 ? "red" : "#222",
//           transition: "0.3s",
//           transform: selected.length === 5 ? "scale(1.1)" : "scale(1)"
//         }}
//       >
//         Selezionate: {selected.length} / 10
//       </h2>

//       {limitReached && (
//         <p style={{ color: "red", marginTop: "-10px" }}>
//           ⚠ Puoi selezionare massimo 5 skills!
//         </p>
//       )}

//       <div style={{ marginBottom: "20px", marginTop: "15px" }}>
//         {skills.map((skill) => (
//           <label
//             key={skill.id}
//             style={{
//               display: "block",
//               margin: "8px 0",
//               padding: "5px 10px",
//               borderRadius: "6px",
//               transition: "0.3s",
//               cursor: "pointer",
//               fontWeight: selected.includes(skill.id) ? "bold" : "normal",
//               backgroundColor: selected.includes(skill.id)
//                 ? "rgba(0, 150, 0, 0.1)"
//                 : "transparent",
//               border: selected.includes(skill.id)
//                 ? "1px solid green"
//                 : "1px solid transparent"
//             }}
//           >
//             <input
//               type="checkbox"
//               checked={selected.includes(skill.id)}
//               onChange={() => toggleSkill(skill.id)}
//               disabled={selected.length >= 5 && !selected.includes(skill.id)}
//               style={{ marginRight: "10px" }}
//             />
//             {skill.name}
//           </label>
//         ))}
//       </div>

//       <button
//         onClick={resetAll}
//         style={{
//           padding: "8px 18px",
//           backgroundColor: "#222",
//           color: "white",
//           borderRadius: "6px",
//           cursor: "pointer",
//           border: "none"
//         }}
//       >
//         Reset
//       </button>

//       {/* RIEPILOGO ANIMATO */}
//       <div style={{ marginTop: "25px" }}>
//         <h3>Skills selezionate:</h3>
//         {selected.length === 0 ? (
//           <p>Nessuna skill selezionata</p>
//         ) : (
//           <ul style={{ paddingLeft: "20px" }}>
//             {selected.map((id) => {
//               const sk = skills.find((s) => s.id === id);
//               return (
//                 <li
//                   key={id}
//                   style={{
//                     margin: "5px 0",
//                     opacity: "1",
//                     animation: "fadeIn 0.5s"
//                   }}
//                 >
//                   {sk.name}
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Checkbox;
