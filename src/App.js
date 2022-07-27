import React,{useState, useEffect} from "react";
import {  Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme"
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/searchBar"
import JobCard from "./components/job/JobCard";
import NewJob from "./components/job/NewJob";

export default () => {
  const url = "http://localhost:3000/jobs";
  const [jobs, setJobs] = useState([]);


  // useEffect hook to get all the jobs and set it to state
  useEffect(() => {
    fetch(url) 
      .then((r) => r.json())
      .then((data) => setJobs(data)); 
  }, []);
  // const jobList = jobs.map((jobs) => console.log(jobs))

  // console.log(jobs)
  return (
   <ThemeProvider theme={theme}>
    <Header />
    <NewJob/>
    <Grid container justifyContent="center">
    <Grid item xs={10}>
        <SearchBar/>
        {/* {console.log(jobs)} */}
        
       { jobs.map((jobs) => 
       <JobCard id={jobs.id} company={jobs.company} key= {jobs.id} jobtype={jobs.job_type}/>)}
      </Grid>
      </Grid>
     </ThemeProvider>

  )
};
