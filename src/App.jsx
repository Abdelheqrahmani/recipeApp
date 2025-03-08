import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { useEffect } from "react";
import Main from "./components/Main";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container mx-auto App">
      <Router>
        <Pages />
      </Router>
    </div>
  );
}

export default App;
