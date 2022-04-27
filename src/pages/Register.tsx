import { TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Grid, Button } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { addBeer } from "../redux/beerSlice";

const Content = styled(Grid)`
  padding-top: 10vh;
  margin: auto;
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
    <Content container alignItems="center" spacing={2} direction="column">
      <Grid item xs={12}>
        <TextField name="name" label="name" onChange={handleNameChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="description"
          label="description"
          onChange={handleDescChange}
        />
      </Grid>
      <Grid item xs={12} sm container direction="row-reverse">
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleSubmit}>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Content>
  );
}

function randomNumber(min: number, max: number) {
  return min + Math.floor(Math.random() * max);
}

export default Register;
