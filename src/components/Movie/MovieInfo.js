import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles(theme => ({
  root: {
    height: 315,
    width: 400
  }
}));

function MovieInfo({ movie, width }) {
  console.log(movie);
  const classes = useStyles();

  function getSize() {
    if (isWidthUp("lg", width)) {
      return [460, 380];
    }

    if (isWidthUp("md", width)) {
      return [310, 340];
    }

    if (isWidthUp("sm", width)) {
      return [220, 240];
    }

    return [160, 115];
  }

  const [cardWidth, cardHeight] = getSize();

  return (
    <Card
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`
      }}
    >
      <Typography>{movie.EventTitle}</Typography>
    </Card>
  );
}

export default withWidth()(MovieInfo);
