import React, { useState, useEffect } from "react";

function SkillSelector() {
  const skillsList = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
    { id: 3, name: "Vue" },
    { id: 4, name: "Angular" },
    { id: 5, name: "TypeScript" },
    { id: 6, name: "Node.js" },
    { id: 7, name: "PHP" },
    { id: 8, name: "Laravel" },
    { id: 9, name: "WordPress" },
    { id: 10, name: "CSS" },
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleCheckboxChange = (id) => {
    if (selectedSkills.includes(id)) {
      setSelectedSkills(selectedSkills.filter((skillId) => skillId !== id));
    } else {
      setSelectedSkills([...selectedSkills, id]);
    }
  };

    // Reset delle selezioni
  const handleReset = () => {
    setSelectedSkills([]);
  };


  useEffect(() => {
    if (selectedSkills.length > 5) {
      alert("Hai selezionato più di 5 skills!");
    }
  }, [selectedSkills]);

  const selectedNames = skillsList
    .filter(skill => selectedSkills.includes(skill.id))
    .map(skill => skill.name);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Seleziona le tue skills</h2>

      <p style={{ color: selectedSkills.length > 5 ? "red" : "black" }}>
        Selezionate: {selectedSkills.length} / {skillsList.length}
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {skillsList.map((skill) => (
          <li key={skill.id}>
            <label
              style={{
                fontWeight: selectedSkills.includes(skill.id) ? "bold" : "normal",
                color: selectedSkills.includes(skill.id) ? "blue" : "black",
              }}
            >
              <input
                type="checkbox"
                checked={selectedSkills.includes(skill.id)}
                onChange={() => handleCheckboxChange(skill.id)}
              />
              {skill.name}
            </label>
          </li>
        ))}
      </ul>
        {/*  Bottone Reset */}
      <button
        onClick={handleReset}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          backgroundColor:"black",
          border: "1px solid",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
      <div>
        {selectedSkills.length > 0 ? (
          <p>Hai selezionato: {selectedNames.join(", ")}</p>
        ) : (
          <p>Nessuna skill selezionata.</p>
        )}
      </div>
    </div>
  );
}

export default SkillSelector;
