import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import GenreList from "./GenreList";
import AudioInterest from "./Interest";

const useStyles = makeStyles(theme => ({
  root: {
    alignSelf: "center",
    justifySelf: "center"
  },
  header: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 4
  },
  title: {
    fontWeight: "800",
    marginLeft: "2%",
    marginRight: "2%"
  },
  certificateTitle: {
    color: "#929292",
    fontWeight: "800",
    marginLeft: "20%",
    marginRight: "20%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

function MovieInfo({ movie, width }) {
  console.log(movie);
  const classes = useStyles();

  function getSize() {
    if (isWidthUp("lg", width)) {
      return [260, 340];
    }

    if (isWidthUp("md", width)) {
      return [240, 300];
    }

    if (isWidthUp("sm", width)) {
      return [180, 300];
    }

    return [200, 315];
  }

  const [cardWidth, cardHeight] = getSize();

  return (
    <Card
      className={classes.root}
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <CardContent className={classes.root}>
        <InfoCardTitle movie={movie} />
        <Typography variant="body2" color="textSecondary" component="p">
          {movie.ShowDate}
        </Typography>
        <GenreList genres={movie.EventGenre} />

        <br />

        <AudioInterest ratings={movie.ratings} />
      </CardContent>
    </Card>
  );

  function InfoCardTitle({ movie }) {
    return (
      <div className={classes.header}>
        <Typography
          variant={isWidthUp("lg", width) ? "h5" : "subtitle1"}
          className={classes.title}
        >
          {movie.EventTitle.length > 0 ? movie.EventTitle : "nill"}{" "}
        </Typography>
        <Typography
          className={classes.certificateTitle}
          variant={isWidthUp("lg", width) ? "subtitle2" : "caption"}
        >
          {movie.EventCensor.length > 0
            ? `Rated ${movie.EventCensor}`
            : "not rated yet"}{" "}
        </Typography>
      </div>
    );
  }
}

export default withWidth()(MovieInfo);
