import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import VideoPlayer from "./VideoPlayer";
import MovieInfo from "./MovieInfo";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: 32
  }
}));

export default function Movie({ movie }) {
  const classes = useStyles();
  return (
    <Grid container xs={12} className={classes.root}>
      <VideoPlayer url={movie.TrailerURL} />
      <MovieInfo movie={movie} />
    </Grid>
  );
}
