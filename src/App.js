import React from "react";
import "./App.css";
import Navbar from "./component/navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bar from "./pages/Bar Chart";
import Pie from "./pages/Pie Chart";
import Scatter from "./pages/Scatter Plot";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Bar chart" component={Bar} />
        <Route path="/Pie chart" component={Pie} />
        <Route path="/Scatter plot" component={Scatter} />
      </Switch>
    </Router>
  );
}

export default App;
