import { Container, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Grid, Button } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { addBeer } from "../redux/beerSlice";

const Content = styled(Container)`
  padding-top: 10vh;
  margin: auto;
`;

const Input = styled(TextField)`
  /* width: inherit; */
`;

function Register() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagline(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addBeer({ name, tagline, id: randomNumber(100, 999) }));
  };

  return (
    <Content maxWidth="sm">
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Input
            name="name"
            label="name"
            variant="filled"
            required
            fullWidth
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="description"
            label="description"
            variant="filled"
            fullWidth
            required
            onChange={handleDescChange}
          />
        </Grid>
        <Grid item container direction="row-reverse">
          <Grid item>
            <Button variant="contained" onClick={handleSubmit}>
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Content>
  );
}

function randomNumber(min: number, max: number) {
  return min + Math.floor(Math.random() * max);
}

export default Register;
