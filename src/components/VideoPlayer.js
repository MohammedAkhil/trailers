import React from "react";
import { Grid } from "@material-ui/core";

export default function VideoPlayer({ url, autoplay, rel, modest }) {
  return (
    <Grid item key={"Asdsadasdad"} xs={6} spacing={2}>
      <iframe
        title="a"
        height="715"
        src={"https://www.youtube.com/embed/" + url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Grid>
  );
}
