import React,{useState} from 'react'
import "./ActivityLevel.css"


const card=[
  {
    title:"Not Very Active",
    desc:"Spend most of the day sitting(e.g bankteller,desk job)"
  },
  {
    title:"Lightly Active",
    desc:"Spend a good part of the day on your feel(e.g teacher,salesperson)"
  },
  {
    title:"Active",
    desc:"Spend a good part of the day doing some physical activity(e.g food server,postal carrier)"
  },
  {
    title:"Very Active",
    desc:"Spend a good part of the day doing heavy physical activity (e.g bike messenger,carpenter)"
  }

  ]
  function Card({ card, isSelected, onClick }) {
    const style = {
     color: isSelected ? '#4F80FF' : 'rgb(138, 134, 134)',
  
    };
  
    return (
      <div id='divv' style={style} onClick={onClick} >
       <h4>{card.title}</h4> 
       <p>{card.desc}</p>
      </div>
    );
  }


function ActivityLevel() {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <div className='MainActivity'>
    <div className='activity'>
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

export default ActivityLevel
