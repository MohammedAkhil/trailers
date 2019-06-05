import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ThumbsUpIcon from "@material-ui/icons/ThumbUp";
import ThumbsDownIcon from "@material-ui/icons/ThumbDown";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  interest: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  iconPositive: {
    color: "green"
  },
  iconNegative: {
    color: "red"
  },
  iconMaybe: {
    color: "orange"
  },
  iconText: {
    fontWeight: "800",
    color: "#929292"
  },
  header: {
    color: "#929292",
    fontWeight: "800",
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: 8
  }
}));
export default function AudienceInterest({ ratings }) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="subtitle2" className={classes.header}>
        Want to see
      </Typography>
      <div className={classes.root}>
        <TotalCount
          Icon={<ThumbsUpIcon className={classes.iconPositive} />}
          ratingCount={ratings.totalWTSCount}
        />
        <TotalCount
          Icon={<ThumbsUpDownIcon className={classes.iconMaybe} />}
          ratingCount={ratings.maybe}
        />
        <TotalCount
          Icon={<ThumbsDownIcon className={classes.iconNegative} />}
          ratingCount={ratings.dwtsCount}
        />
      </div>
    </div>
  );

  function TotalCount({ Icon, ratingCount }) {
    return (
      <div className={classes.interest}>
        {Icon}
        <Typography className={classes.iconText} variant="caption">
          {ratingCount}
        </Typography>
      </div>
    );
  }
}
