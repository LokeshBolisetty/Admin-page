import React from "react";
import "./App.css";
import Welcome from "./Components/Welcome/index";
import CardCounter from "./Containters/CardCounter";

function App() {
  return (
    <React.Fragment>
      <Welcome />
      {/*<OptionCards />*/}
      <CardCounter />
    </React.Fragment>
  );
}

export default App;
