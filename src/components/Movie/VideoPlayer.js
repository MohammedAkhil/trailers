import React from "react";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

function VideoPlayer({ url, autoplay, rel, modest, width }) {
  const videoCode = youtubeParser(url);
  console.log(videoCode);

  function getSize() {
    if (isWidthUp("lg", width)) {
      return [760, 340];
    }

    if (isWidthUp("md", width)) {
      return [540, 300];
    }

    if (isWidthUp("sm", width)) {
      return [300, 300];
    }

    return [200, 315];
  }

  const [videoWidth, videoHeight] = getSize();

  return (
    <iframe
      width={videoWidth}
      height={videoHeight}
      title="a"
      src={"https://www.youtube.com/embed/" + videoCode}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  );
}

function youtubeParser(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}

export default withWidth()(VideoPlayer);
