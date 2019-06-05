/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "./AppBar";
import Footer from "./Footer";
import "../App.css";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import Movie from "./Movie";
import VideoPlayer from "./VideoPlayer";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  gridItem: {
    marginLeft: 2,
    marginRight: 2
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "300px",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  cardMedia: {
    paddingTop: "100%", // 16:9,
    flex: 1
  },
  cardContent: {
    flexGrow: 1,
    flex: 0.1
  },
  overlay: {
    top: "0px",
    paddingTop: "50%",
    left: "0px",
    color: "white",
    position: "absolute",
    display: "none",
    backgroundColor: "#000000a3",
    right: "0px",
    bottom: "0px",
    margin: "auto"
  }
}));

function MovieList(props) {
  const classes = useStyles();
  const { movies } = props;
  const [cards, updateCards] = useState(getMovieCards());
  let isPlayer = false;
  let playerPosition = 0;
  console.log(props.width);
  const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <main>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={2}>
            {cards}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Footer />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );

  function onClickCard(index, url, movie) {
    const code = youtubeParser(url);
    const insertPosition = getInsertPosition(index);
    console.log(insertPosition + "position to insert");
    const modify = cards;

    if (isPlayer) {
      deleteAt(playerPosition, modify);
    }
    insertAt(insertPosition, modify, code, movie);
    updateCards([...modify]);
    isPlayer = true;
    playerPosition = insertPosition;
  }

  function youtubeParser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  function insertAt(position, arr, urlCode, movie) {
    arr.splice(position, 0, <Movie url={urlCode} movie={movie} />);
    return arr;
  }

  function deleteAt(position, arr) {
    arr.splice(position, 1);
    return arr;
  }

  function getMovieCards() {
    return Object.entries(movies).map(([key, value], index) => {
      return (
        <Grid
          item
          key={value.EventCode}
          xs={6}
          sm={4}
          md={3}
          lg={2}
          spacing={2}
        >
          <Card
            className="card"
            onClick={() => onClickCard(index, value.TrailerURL, value)}
          >
            <CardMedia
              className={classes.cardMedia}
              image={`https://in.bmscdn.com/events/moviecard/${
                value.EventCode
              }.jpg`}
              title={value.EventTitle}
            />
            {<Overlay text={value.EventTitle} />}
          </Card>
        </Grid>
      );
    });
  }

  function getInsertPosition(currentPos) {
    console.log("current - " + currentPos);
    const rowCount = getRowCount();
    console.log("rowCount -> ", rowCount);
    return Math.floor(currentPos / rowCount) * rowCount;
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

  function Overlay({ text }) {
    return (
      <Typography variant="h6" className="overlay">
        {text}
      </Typography>
    );
  }
}

export default withWidth()(MovieList);
