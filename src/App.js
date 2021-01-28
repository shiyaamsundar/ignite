import React from "react";
import { Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {


  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      <Route path={['/games/:id',"/"]}>
    <Home/></Route>
    </div>
  );
}

export default App;
