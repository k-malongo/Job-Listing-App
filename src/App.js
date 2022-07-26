import React from "react";
import { Box, Grid,Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme"
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/searchBar"
import JobCard from "./components/job/JobCard";
import NewJob from "./components/job/NewJob";

export default () => {
  return (
   <ThemeProvider theme={theme}>
    <Header />
    <NewJob/>
    <Grid container justifyContent="center">
    <Grid item xs={10}>
        <SearchBar/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>

      </Grid>
      </Grid>
     </ThemeProvider>

  )
};
