import React,{useState} from 'react'
import './GoalBarriers.css'

const card=["Lack of time","The regimen was too hard to follow","Did not enjoy the food","Difficult to make food choices","Social eating and events","Food cravings","Lack of progress"]
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


function GoalBarriers() {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <div className='goal'>
      <div className='cards'>
     {card.map((card) => (
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

export default GoalBarriers
