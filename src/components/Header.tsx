import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import styled from "styled-components";
import { Circle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const RightNav = styled.div``;

const NavButton = styled(Button)`
  color: white;
`;

const SpacedToolbar = styled(Toolbar)`
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar>
        <SpacedToolbar>
          <Circle fontSize="large" />
          <RightNav>
            <NavButton
              onClick={() => navigate("/")}
              variant="text"
              color="inherit"
            >
              Listar
            </NavButton>
            <NavButton
              onClick={() => navigate("/add")}
              variant="text"
              color="inherit"
            >
              Cadastrar
            </NavButton>
          </RightNav>
        </SpacedToolbar>
      </AppBar>
      <Toolbar />
      {children}
    </>
  );
};

export default Header;
