import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/searchBar";
import JobCard from "./components/job/JobCard";
import NewJob from "./components/job/NewJob";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import ViewJob from "./components/job/ViewJob";

export default () => {
  const url = "https://jbap.herokuapp.com/jobs";
  // const url = "https://jbap.herokuapp.com/jobs";

  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const [viewJob, setViewJob] = useState([]);
  const [check, setCheck] = useState(false);

  // useEffect hook to get all the jobs and set it to state
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setJobs(data));
  }, []);

  function handleAddJob(newJob) {
    setJobs([...jobs, newJob]);
  }
  function searchFunction(searchValue) {
    const itemsSearch = viewJob.filter((item) => item.job_type.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.company.toLowerCase().includes(searchValue.toLowerCase())
    );
    setJobs(itemsSearch)
    console.log(jobs)
}
function deleteJob(id) {
  const updatedJob = jobs.filter((job) => job.id !== id);
  setJobs(updatedJob);
}
  return (
    <ThemeProvider theme={theme}>
      <Header openNewJob={() => setOpen(true)} />

      <Routes>

      <Route exact path ='/'>
       <Homepage />
       </Route>
      <Route exact path ='/newjobs'>
      <NewJob
        closeJob={() => setOpen(false)}
        handleAddJob={handleAddJob}
        url={url}
        open={open}
      />

      {/* {jobs.map((jobs) => ( */}
        <ViewJob open={check} closeJob={() => setCheck(false)}  />
     

      </Route>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />
          <Route exact path ='/jobs'> 
          {jobs.map((jobs) => (
            <JobCard
              id={jobs.id}
              company={jobs.company}
              key={jobs.id}
              jobtype={jobs.job_type}
              skills={jobs.requirement}
              time={jobs.type}
              handleDelete={deleteJob}
              // checkJob={() => setCheck(true)}
            />
          ))}
          </Route>
        </Grid>
      </Grid>
      </Routes>
    </ThemeProvider>
  );
};
