import React, { useState } from "react";
import "./Welcome.css";
import { TailSpin } from "react-loader-spinner";

function Welcome({ page, setPage }) {
  const [isLoading, setIsLoading] = useState(false);

  const CurPage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPage(page + 1);
    }, 2000);
  };

  return (
    <div className="parent">
      <div className="title">
        <div id="heading">
          <>
            <h2>Welcome! Let's customize your </h2>
            <h2>Fitness Goals</h2>
            <button 
              style={{ backgroundColor: isLoading ? "lightgrey" : "skyblue", 
               border:"none"}}

            disabled={isLoading} onClick={CurPage}>
              {isLoading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <TailSpin
                    height="80%"
                    width="20"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              ) : (
                "CONTINUE"
              )}
            </button>
          </>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
