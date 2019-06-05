import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
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

export function MovieListItem({ value, onClick, index }) {
  const classes = useStyles();

  return (
    <Grid item key={value.EventCode} xs={6} sm={4} md={3} lg={2} spacing={2}>
      <Card
        className="card"
        onClick={() => onClick(index, value.TrailerURL, value)}
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

  function Overlay({ text }) {
    return (
      <Typography variant="h6" className="overlay">
        {text}
      </Typography>
    );
  }
}
