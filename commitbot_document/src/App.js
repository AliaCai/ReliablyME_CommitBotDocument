import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./component/Navbar";
import Left_nav from "./component/Left_nav";
import Content from "./component/Content";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="content_line">
        <Left_nav />
        <Content />
      </div>
    </Router>
  );
}

export default App;
