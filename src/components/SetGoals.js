import React,{useState} from 'react'
import './SetGoals.css'

const cards=["Lose weight","Maintain weight","Gain weight","Gain muscle","Modify my diet"]

function Card({ card, isSelected, onClick }) {
  const style = {
   color: isSelected ? '#4F80FF' : 'rgb(138, 134, 134)',

  };

  return (
    <div style={style} onClick={onClick}>
      {card}
    </div>
  );
}
function SetGoals() {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <div className='main'>
    <div className='card'>
     {cards.map((card) => (
        <Card
          key={card}
          card={card}
          isSelected={selectedCard === card}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
    </div>
  )
}

export default SetGoals
