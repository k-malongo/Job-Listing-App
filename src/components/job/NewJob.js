import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  FilledInput,
  makeStyles,
  Button,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    // transition: ".3s",
    fontWeight: 600,
    // backgroundColor: "lightblue",
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  },
}));

const skills = [
  "Javascript",
  "React",
  "vue",
  "firebase",
  "Node",
  "MongoDb",
  "Express",
];
export default function NewJob({ url, handleAddJob,open,closeJob}) {
  const classes = useStyles();
  const [job_type, setTitle] = useState("");
  const [type, setType] = useState("");
  const [company, setCompany] = useState("");
  const [companyurl, setUrl] = useState("");
  const [description, setDesc] = useState("");
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [skillss, setSkills] = useState([]);
  const [old, setOld]=useState()


  function handleSubmit(e) {
    e.preventDefault();

    const jobData = {
      job_type,
      type,
      company,
      companyurl,
      description,
      job,
      location,
      skillss,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((r) => r.json())
      .then((data) => {
        handleAddJob(data);

        setTitle("")
        setType("")
        setCompany("")
        setUrl("")
        setDesc("")
        setJob("")
        setLocation("")
      });
  }

  // const addRemoveSkill=(skill)=>
  //   skillss.includes(skill)
  //   ?setSkills
  //   //removing

  //   :

  
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post Job
          <IconButton>
            <CloseIcon onClick={closeJob}/>
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} id="myform">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FilledInput
                value={job_type}
                onChange={(e) => setTitle(e.target.value)}
                placeholder=" Job title *"
                disableUnderline
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                onChange={(e) => setType(e.target.value)}
                value={type}
                fullWidth
                disableUnderline
                variant="filled"
                defaultValue="Full Time"
              >
                <MenuItem value="Full Time"> Full time</MenuItem>
                <MenuItem value="Part Time"> Part time</MenuItem>
                <MenuItem value="Contract"> Contract </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <FilledInput
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                placeholder=" Company Name *"
                disableUnderline
              />
            </Grid>
            <Grid item xs={6}>
              <FilledInput
                onChange={(e) => setUrl(e.target.value)}
                value={companyurl}
                placeholder=" Company URL *"
                disableUnderline
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                disableUnderline
                fullWidth
                variant="filled"
                defaultValue="Remote"
              >
                <MenuItem value="Remote"> Remote</MenuItem>
                <MenuItem value="In Office"> In Office</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <FilledInput
                onChange={(e) => setJob(e.target.value)}
                value={job}
                placeholder=" Job link *"
                disableUnderline
              />
            </Grid>
            <Grid item xs={12}>
              <FilledInput
                value={description}
                onChange={(e) => setDesc(e.target.value)}
                placeholder=" skill1 *"
                fullWidth
                multiline
                rows={3}
                disableUnderline
              />
            </Grid>
            <Grid item xs={6}>
              <FilledInput
                onChange={(e) => setCompany(e.target.value)}
                value={skillss}
                placeholder=" skill2 *"
                disableUnderline
              />
            </Grid>
            <Grid item xs={6}>
              <FilledInput
                onChange={(e) => setUrl(e.target.value)}
                value={skillss}
                placeholder=" Company URL *"
                disableUnderline
              />
            </Grid>
          </Grid>
         
        </form>
      </DialogContent>
      <DialogActions>
        <Box
          color="red"
          width="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Typography variant="caption">*Required fields</Typography>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            type="submit"
            form="myform"
          >
            Post Job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

// {skills.map((skill) => (
//   <Box className={classes.skillChip} 
//   key={skill }>
//     {/* value={skillss}
//     onChange={(e) => setSkills(e.target.value)} */}
//     {skill
//     value={skillss}
//     onChange={(e) => setSkills(e.target.value)}
//     }
//   </Box>
// ))}
{/* <Box display="flex">
          
</Box> */}