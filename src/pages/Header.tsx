import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import styled from "styled-components";
import { Person } from "@mui/icons-material";

const RightNav = styled.div``;

const NavButton = styled(Button)`
  color: white;
`;

const SpacedToolbar = styled(Toolbar)`
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

function App() {
  return (
    <AppBar>
      <SpacedToolbar>
        <Person />
        <RightNav>
          <NavButton variant="text" color="inherit">
            Listar
          </NavButton>
          <NavButton variant="text" color="inherit">
            Cadastrar
          </NavButton>
        </RightNav>
      </SpacedToolbar>
    </AppBar>
  );
}

export default App;
