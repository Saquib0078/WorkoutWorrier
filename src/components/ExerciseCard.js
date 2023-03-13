import { Link } from "react-router-dom";
import { useState } from "react";

const ExerciseCard = ({ item, handleClick }) => {
  const [added, setAdded] = useState(false);

  const handleAddClick = () => {
    handleClick(item._id);
    setAdded(true);
  };

  return (
    <div className="cardExercise">
      <Link to={`/exercise/${item._id}`}>
        <img src={item.image} />
        <h3> {item.type}</h3>
        <p>{item.name}</p>
        <p>{item.muscle}</p>
      </Link>
      <button
        onClick={handleAddClick}
        disabled={added}
        style={{ backgroundColor: added ? "grey" : "rgb(23, 98, 163)" }}
      >
        {added ? "Added" : "Add"}
      </button>
    </div>
  );
};

export default ExerciseCard;
