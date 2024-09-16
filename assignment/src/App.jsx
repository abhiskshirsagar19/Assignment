import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import WinPage from "./components/WinPage";
import LosePage from "./components/LosePage";

const App = () => {
  const [points, setPoints] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home points={points} setPoints={setPoints} />}
        />
        <Route path="/win" element={<WinPage points={points} />} />
        <Route path="/lose" element={<LosePage points={points} />} />
      </Routes>
    </Router>
  );
};

export default App;
