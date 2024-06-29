import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header>This is Header</header>
      <h2>{process.env.WELCOME_TEXT || "Inside App.js"}</h2>
      <img src="logo92.png" alt="Logo"></img>
      <footer>This is footer</footer>
    </div>
  );
}

export default App;
