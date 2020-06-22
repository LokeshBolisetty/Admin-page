import React from "react";
import "./App.css";
import Welcome from "./Components/Welcome/index";
import OptionCards from "./Components/OptionCards";
import EachBlog from "./Containters/EachBlog";
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
