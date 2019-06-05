import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 16,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: 4
  }
}));

export default function GenreList({ genres }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {getGenreArr(genres).map(genre => (
        <Chip label={genre} className={classes.chip} />
      ))}
    </div>
  );
}

function getGenreArr(genres) {
  return genres.split("|");
}
