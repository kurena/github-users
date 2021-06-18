import "./App.css";
import React from "react";
import { Button } from "react-responsive-button";
import "react-responsive-button/dist/index.css";
import { Link } from "react-router-dom";

const ButtonStyled = (text) => {
  return (
    <Link to={`/user/${text}`}>
      <Button
        style={{ background: "#3260c7", width: "10%", "margin-right": "15px" }}
      >
        {text}
      </Button>
    </Link>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Top 5 GitHub Users</h1>
        <p>Tap the username to see more information</p>
      </header>
      <div className="buttons">
        {ButtonStyled("GrahamCampbell")}
        {ButtonStyled("fabpot")}
        {ButtonStyled("weierophinney")}
        {ButtonStyled("rkh")}
        {ButtonStyled("josh")}
      </div>
    </div>
  );
}

export default App;
