import React, { useEffect } from "react";
import styled from "styled-components";
import { Card, CardMedia, CardContent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Beer, fetchBeers } from "../redux/beerSlice";

const Row = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
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
    <Column>
      {value.map((beer) => {
        return (
          <Row>
            <BeerCard beer={beer} />
          </Row>
        );
      })}
    </Column>
  );
}

function BeerCard({ beer }: BeerCardProps) {
  return (
    <Card sx={{ width: 250, height: 300 }}>
      <CardMedia
        component="image"
        style={{ height: 0, paddingTop: "100%" }}
        image={beer.image_url}
      />
      <CardContent>{beer.name}</CardContent>
    </Card>
  );
}

interface BeerCardProps {
  beer: Beer;
}

export default List;
