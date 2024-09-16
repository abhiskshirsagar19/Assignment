import React from "react";

const WinPage = ({ points }) => {
  return (
    <div>
      <h1>You Won! Points: {points}</h1>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default WinPage;
