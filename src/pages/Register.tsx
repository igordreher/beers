import { Button, Container, Grid, InputLabel, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { addBeer } from "../redux/beerSlice";
import { useAppDispatch } from "../redux/hooks";

const Content = styled(Container)`
  padding-top: 10vh;
  margin: auto;
`;

function Register() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tagline, setTagline] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagline(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      addBeer({
        name,
        tagline,
        id: randomNumber(100, 999),
        image_url: imageUrl,
      })
    );
    setName("");
    setTagline("");
    setImageUrl("");
  };

  return (
    <Content maxWidth="sm">
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Input value={name} label="Name" onChange={handleNameChange} />
        </Grid>
        <Grid item xs={12}>
          <Input
            value={tagline}
            label="Description"
            onChange={handleDescChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            value={imageUrl}
            label="Image URL"
            onChange={handleImageChange}
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

interface InputProps {
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ value, onChange, label }: InputProps) {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <TextField value={value} variant="filled" fullWidth onChange={onChange} />
    </>
  );
}

function randomNumber(min: number, max: number) {
  return min + Math.floor(Math.random() * max);
}

export default Register;
