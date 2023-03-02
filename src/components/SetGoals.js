import React, { useState } from "react";
import "./SetGoals.css";

const cards = [
  "Lose weight",
  "Maintain weight",
  "Gain weight",
  "Gain muscle",
  "Modify my diet",
];

function Card({ card, isSelected, onClick, id }) {
  const style = {
    color: isSelected ? "#4F80FF" : "rgb(138, 134, 134)",
  };

  // console.log(isSelected,cards[id])

  return (
    <div style={style} onClick={onClick}>
      {card}
    </div>
  );
}
function SetGoals({ form,setForm  }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setForm({...form,goals:card});
  };
  return (
    <div className="main">
      <div className="card">
        {cards.map((card, index) => (
          <Card
            id={index}
            key={card}
            card={card}
            isSelected={selectedCard === card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
}

export default SetGoals;
