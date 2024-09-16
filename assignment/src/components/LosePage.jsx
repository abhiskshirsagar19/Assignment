import React from "react";

const LosePage = ({ points }) => {
  return (
    <>
      <div>
        <h1>You Lost! Points: {points}</h1>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </>
  );
};

export default LosePage;
