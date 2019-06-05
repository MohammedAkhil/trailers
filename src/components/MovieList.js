/* eslint-disable no-useless-escape */
import React, { useState } from "react";
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
  let isPlayerOpen = false; // whether the trailer card is open
  let prevPosition = 0; // previous position of trailer card

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={2}>
          {cards}
        </Grid>
      </Container>
    </React.Fragment>
  );

  function onClickCard(index, url, movie) {
    insertTrailerCard(index, url, movie);
  }

  function getMovieCards() {
    return Object.entries(movies).map(([key, value], index) => {
      return (
        <MovieListItem value={value} index={index} onClick={onClickCard} />
      );
    });
  }

  function insertTrailerCard(index, url, movie) {
    const insertPosition = getInsertPosition(index);
    console.log(insertPosition + "position to insert");
    const modify = cards;

    if (isPlayerOpen) {
      deleteAt(prevPosition, modify);
    }
    insertAt(insertPosition, modify, url, movie);
    updateCards([...modify]);
    isPlayerOpen = true;
    prevPosition = insertPosition;

    function getInsertPosition(currentPos) {
      console.log("current - " + currentPos);
      const rowCount = getRowCount();
      console.log("rowCount -> ", rowCount);
      return Math.floor(currentPos / rowCount) * rowCount;
    }

    function insertAt(position, arr, url, movie) {
      arr.splice(position, 0, <Movie url={url} movie={movie} />);
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
}

export default withWidth()(MovieList);
