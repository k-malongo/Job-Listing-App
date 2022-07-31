import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function Header({ openNewJob }) {
  return (
    <Box py={10} bgcolor="secondary.main" color="white">
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Box display="flex" justifyContent="space-between">
            {/* <Typography variant="h5"> */}
              {/* <NavLink to="/">Home</NavLink> */}
              {/* Home */}
            {/* </Typography> */}
            <Typography variant="h5">
              <NavLink to="/">Open Job Listing</NavLink>
            </Typography>
            <Typography variant="h2" color="primary">
              Find your job Easily
            </Typography>

            <Button onClick={openNewJob} variant="contained" color="primary" >
            <NavLink to="/newjobs">Post job</NavLink>  
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

