import React from "react";
import Header from "../components/Header";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Register />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
