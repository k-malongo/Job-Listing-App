import React, { useState } from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import ViewJob from "./ViewJob";
// or
// import { CardMedia } from '@mui/material/core';
const skills = ["Javascript", "React.js", "Node.js"];
var skill = skills[Math.floor(Math.random() * skills.length)];
const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: " 1px solid #E8E8E8",
    cursor: "pointer",
    transition: ".3s",
    borderRadius: "5px",
    "&:hover": {
      boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
      borderLeft: "6px solid #4D64E4",
    },
  },
  companyName: {
    fontSize: "13.px",
    backgroundColor: "gold",
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    width: "70px",
    fontWeight: 600,
  },
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    // transition: ".3s",
    fontWeight: 600,
    backgroundColor: "cyan",
    // theme.palette.secondary.main,
    // color: "fff"
  },
}));
export default function JobCard({ id, company, jobtype, time, handleDelete, salary, location, url, image }) {
  const [check, setCheck] = useState(false);
  console.log(skill)
  const classes = useStyles();
  function handleDeleteClick() {
    console.log(id);
    fetch(`https://jbap.herokuapp.com/jobs/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelete(id));
  }
  return (
    <Box p={2} className={classes.wrapper} key={id}>
      {
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">{jobtype}</Typography>
            <Typography className={classes.companyName} variant="subtitle2">
              {company}
            </Typography>
          </Grid>
          <Grid item container xs>
          
                 <Box
        component="img"
        sx={{
          height: 100,
          width: 150,
          maxHeight: { xs: 120, md: 167 },
          maxWidth: { xs: 150, md: 250 },
          borderRadius:{md:5},
        }}
        alt="The company image"
        src={image}
      />
          </Grid>
          <Grid
            item
            container
            direction="column"
            color="white"
            alignItems="flex-end"
            xs
          >
            <Grid item>
              <Typography variant="caption"> {salary} | {location}</Typography>
            </Grid>
            <Grid item>
              <Box mt={2}>
              <Button
                  variant="outlined"
                >
                   <a href={url} target="_blank" >Apply</a>
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleDeleteClick}
                >
                  Delete
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      }
    </Box>
  );
}