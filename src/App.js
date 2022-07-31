import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/searchBar";
import JobCard from "./components/job/JobCard";
import NewJob from "./components/job/NewJob";
import { Router, Routes } from "react-router-dom";
// import Homepage from "./components/homepage/Homepage";
// import ViewJob from "./components/job/ViewJob";
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
      .then((data) => {
        setJobs(data);
        setViewJob(data);
      });
  }, []);
  function searchFunction(searchValue) {
    const itemsSearch = viewJob.filter(
      (item) =>
        item.job_type.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.company.toLowerCase().includes(searchValue.toLowerCase())
    );
    setJobs(itemsSearch);
    console.log(jobs);
  }
  function handleAddJob(newJob) {
    setJobs([...jobs, newJob]);
  }
  function deleteJob(id) {
    const updatedJob = jobs.filter((job) => job.id !== id);
    setJobs(updatedJob);
  }
  return (
    <ThemeProvider theme={theme}>
      <Header openNewJob={() => setOpen(true)} />
      <Router>
        <Routes>
          <NewJob
            closeJob={() => setOpen(false)}
            handleAddJob={handleAddJob}
            urll={url}
            open={open}
          />
        </Routes>
        {/* <ViewJob open={check} closeJob={() => setCheck(false)}  /> */}
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <SearchBar searchFunction={searchFunction} />
            <Routes>
              {jobs.map((jobs) => (
                <JobCard
                  id={jobs.id}
                  company={jobs.company}
                  key={jobs.id}
                  jobtype={jobs.job_type}
                  skills={jobs.requirement}
                  time={jobs.type}
                  handleDelete={deleteJob}
                  salary={jobs.salary}
                  location={jobs.location}
                  url={jobs.url}
                  image={jobs.image}
                />
              ))}
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
};
