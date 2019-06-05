/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../App.css";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Movie from "./Movie";
import { MovieListItem } from "./MovieListItem";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

function MovieList(props) {
  const classes = useStyles();
  const { movies } = props;
  const [cards, updateCards] = useState(getMovieCards());
  const isPlayerOpen = useRef(false); // whether the trailer card is open
  const prevPosition = useRef(-1); // previous position of trailer card
  const prevClickedPos = useRef(-1);

  useEffect(() => {
    if (isPlayerOpen.current && prevPosition.current > 0) {
      updateTrailerCardPosition();
    }

    function updateTrailerCardPosition() {
      console.log("modify rows");
      const modify = cards;
      deleteAt(prevPosition.current, modify);

      const insertPosition = getInsertPosition(prevClickedPos.current);

      insertAt(insertPosition, modify, getMovie(prevClickedPos.current));
      updateCards([...modify]);
      isPlayerOpen.current = true;
      prevPosition.current = insertPosition;

      function getMovie(index) {
        return Object.entries(movies)[index][1];
      }
    }
  }, [props.width]);

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={2}>
          {cards}
        </Grid>
      </Container>
    </React.Fragment>
  );

  function onClickCard(index, movie) {
    insertTrailerCard(index, movie);
  }

  function getMovieCards() {
    return Object.entries(movies).map(([key, value], index) => {
      return (
        <MovieListItem value={value} index={index} onClick={onClickCard} />
      );
    });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function insertTrailerCard(index, movie) {
    prevClickedPos.current = index;
    const insertPosition = getInsertPosition(index);
    console.log(insertPosition + "position to insert");
    const modify = cards;

    if (isPlayerOpen.current) {
      deleteAt(prevPosition.current, modify);
    }
    insertAt(insertPosition, modify, movie);
    updateCards([...modify]);
    isPlayerOpen.current = true;
    prevPosition.current = insertPosition;
  }

  function getInsertPosition(currentPos) {
    const rowCount = getRowCount();
    return Math.floor(currentPos / rowCount) * rowCount;
  }

  function insertAt(position, arr, movie) {
    arr.splice(position, 0, <Movie movie={movie} />);
    return arr;
  }

  function deleteAt(position, arr) {
    arr.splice(position, 1);
    return arr;
  }

  function getRowCount() {
    console.log("width -<", props.width);
    if (isWidthUp("lg", props.width)) {
      return 6;
    }
    if (isWidthUp("md", props.width)) {
      return 4;
    }
    if (isWidthUp("sm", props.width)) {
      return 3;
    }
    return 1;
  }
}

export default withWidth()(MovieList);
