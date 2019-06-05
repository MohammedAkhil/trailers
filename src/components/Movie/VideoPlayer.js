import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function VideoPlayer({ url, autoplay, rel, modest, width }) {
  function getSize() {
    console.log("width -<", width);
    if (isWidthUp("lg", width)) {
      return [640, 380];
    }

    if (isWidthUp("md", width)) {
      return [540, 340];
    }

    if (isWidthUp("sm", width)) {
      return [440, 240];
    }

    return [340, 115];
  }

  const [videoWidth, videoHeight] = getSize();

  return (
    <iframe
      width={videoWidth}
      height={videoHeight}
      title="a"
      src={"https://www.youtube.com/embed/" + url}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  );
}

export default withWidth()(VideoPlayer);
