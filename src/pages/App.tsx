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

const Contents = styled.div`
  margin-top: 64px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Contents>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Register />} />
          </Routes>
        </Contents>
      </BrowserRouter>
    </>
  );
}

export default App;
