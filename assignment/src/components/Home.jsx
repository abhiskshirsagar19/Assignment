import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ points, setPoints }) => {
  const navigate = useNavigate();

  const handleWin = () => {
    setPoints(points + 100);
    navigate("/win");
  };

  const handleLose = () => {
    if (points > 0) {
      setPoints(points - 50);
    } else {
      setPoints(0); // Ensure points don't go below 0
    }
    navigate("/lose");
  };

  return (
    <div>
      <h1>Points: {points}</h1>
      <button onClick={handleWin}>Win</button>
      <button onClick={handleLose}>Lose</button>
    </div>
  );
};

export default Home;
