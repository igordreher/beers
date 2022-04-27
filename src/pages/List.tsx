import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Beer, fetchBeers } from "../redux/beerSlice";

const Content = styled.div`
  margin: 10vmax 30vmax;
`;

function List() {
  const { value = [] } = useAppSelector((state) => state.beers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (value.length === 0) {
      dispatch(fetchBeers());
    }
  }, [value, dispatch]);

  return (
    <Content>
      <Grid
        container
        spacing={3}
        alignItems="center"
        alignContent="center"
        columns={3}
      >
        {value.map((beer) => {
          return (
            <Grid item xs={1}>
              <BeerCard beer={beer} />
            </Grid>
          );
        })}
      </Grid>
    </Content>
  );
}

function BeerCard({ beer }: BeerCardProps) {
  return (
    <Card>
      <CardHeader
        action={
          <Button>
            <Close />
          </Button>
        }
      />
      <CardMedia
        component="image"
        style={{ height: 250, margin: "auto" }}
        image={beer.image_url}
      />
      <CardContent>
        <Typography variant="body1">{beer.name}</Typography>
        <Typography variant="body2">{beer.tagline}</Typography>
      </CardContent>
    </Card>
  );
}

interface BeerCardProps {
  beer: Beer;
}

export default List;
