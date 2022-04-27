import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Button,
  Paper,
  InputBase,
} from "@mui/material";
import { Close, Search } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Beer, fetchBeers, removeBeer, searchBeers } from "../redux/beerSlice";

const Content = styled.div`
  margin: 10vmax 30vmax;
`;

const SearchBar = styled(Paper)`
  padding: 10px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
`;

function List() {
  const [value, setValue] = useState<Beer[]>([]);
  const [search, setSearch] = useState("");
  const {
    remote = [],
    local,
    removed,
  } = useAppSelector((state) => state.beers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const removedFiltered = remote.filter((beer) => !removed.includes(beer.id));
    const searchFiltered = local.filter((beer) => beer.name.includes(search));
    setValue([...searchFiltered, ...removedFiltered]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removed, local, remote]);

  useEffect(() => {
    if (remote.length === 0) {
      dispatch(fetchBeers());
    }
  }, [remote, dispatch]);

  const handleSearchSubmit = () => {
    if (search.length > 0) dispatch(searchBeers(search));
    else dispatch(fetchBeers());
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Content>
      <SearchBar>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for beers"
          onChange={handleChangeSearch}
        />
        <Button onClick={handleSearchSubmit}>
          <Search />
        </Button>
      </SearchBar>
      <Grid
        container
        spacing={3}
        alignItems="center"
        alignContent="center"
        columns={3}
      >
        {value.map((beer) => {
          return (
            <Grid item xs={1} key={beer.id}>
              <BeerCard beer={beer} />
            </Grid>
          );
        })}
      </Grid>
    </Content>
  );
}

function BeerCard({ beer }: BeerCardProps) {
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    dispatch(removeBeer(id));
  };

  return (
    <Card>
      <CardHeader
        action={
          <Button onClick={() => handleClick(beer.id)}>
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
