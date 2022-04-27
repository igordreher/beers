import React from "react";
import Header from "../components/Header";
import { createGlobalStyle } from "styled-components";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import List from "./List";
import Register from "./Register";

const GlobalStyle = createGlobalStyle`
  body {
     background-color: #fafafa;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Register />} />
          </Routes>
        </Header>
      </Router>
    </>
  );
}

export default App;
