import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import VideoPlayer from "./VideoPlayer";
import MovieInfo from "./MovieInfo";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly"
  }
}));

export default function Movie({ url, movie }) {
  const classes = useStyles();
  return (
    <Grid container xs={12} className={classes.root}>
      <VideoPlayer url={url} />
      <MovieInfo movie={movie} />
    </Grid>
  );
}
