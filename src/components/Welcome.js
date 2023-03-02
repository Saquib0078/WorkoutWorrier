import React from "react";
import "./Welcome.css";

function Welcome({ page, setPage }) {
  const CurPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="parent">
      <div className="title">
        <div id="heading">
          <>
            <h2>Welcome! Let's customize your </h2>
            <h2>Fitness Goals</h2>
            <button onClick={CurPage}>CONTINUE</button>
          </>
        </div>
      </div>
    </div>
  );
}

export default Welcome;