import React from "react";
import "./App.css";
import Welcome from "./Components/Welcome/index";
import CardCounter from "./Containters/CardCounter";
import Login from "./login";

function App() {
  return (
    <React.Fragment>
      <Login />
      {/*<Welcome />
      {/*<OptionCards />}
      <CardCounter />*/}
    </React.Fragment>
  );
}

export default App;
