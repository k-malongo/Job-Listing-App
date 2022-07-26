import React from 'react'
import { Box,Grid, IconButton,FilledInput,makeStyles, Button, Select, MenuItem, Dialog, DialogTitle, DialogContent,DialogActions, Typography } from '@material-ui/core'
import {Close as CloseIcon} from "@material-ui/icons"
const useStyles = makeStyles((theme)=>(
    {
        skillChip:{
            margin: theme.spacing(0.5),
            padding: theme.spacing(0.75),
            fontSize: "14.5px",
            borderRadius: "5px",
            // transition: ".3s",
            fontWeight:600,
            // backgroundColor: "lightblue",
            border: `1px solid ${theme.palette.secondary.main}`,
            color: theme.palette.secondary.main,
            cursor:"pointer",
            "&:hover":{
                backgroundColor: theme.palette.secondary.main,
            color: "#fff"
                
            }
          },
    })) 

const skills =[
    "Javascript",
    "React",
    "vue",
    "firebase",
    "Node",
    "MongoDb",
    "Express"

]
export default function NewJob() {
    const classes= useStyles();


  return (
    
    <Dialog open={true} fullWidth>
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
            Post Job
            <IconButton>
                
                <CloseIcon />
            </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={2}>
                <Grid item xs ={6}>
                    <FilledInput placeholder=' Job title *' disableUnderline/>
                </Grid>
                <Grid item xs ={6}>
                <Select fullWidth disableUnderline variant="filled" defaultValue ="Full Time">
                    <MenuItem value="Full Time"> Full time</MenuItem>
                    <MenuItem value="Part Time"> Part time</MenuItem>
                    <MenuItem value="Contract"> Contract </MenuItem>

                </Select>
                </Grid>
                <Grid item xs ={6}>
                    <FilledInput placeholder=' Company Name *' disableUnderline/>
                </Grid>
                <Grid item xs ={6}>
                <FilledInput placeholder=' Company URL *' disableUnderline/>
               
                </Grid>
                <Grid item xs ={6}>
                <Select disableUnderline fullWidth variant="filled" defaultValue ="Remote">
                    <MenuItem value="Remote"> Remote</MenuItem>
                     <MenuItem value="In Office"> In Office</MenuItem>

             </Select>
                </Grid>
                <Grid item xs ={6}>
                    <FilledInput placeholder=' Job link *' disableUnderline/>
                </Grid>
                <Grid item xs ={12}>
                    <FilledInput 
                    placeholder=' Job description *' 
                    fullWidth 
                    multiline 
                    rows={3} 
                    disableUnderline/>
                </Grid>
            </Grid>
            <Box display="flex" >
                {skills.map((skill) => (
                    <Box  className={classes.skillChip} key = {skill}>{skill}</Box>

                ))}
            </Box>
        </DialogContent>
        <DialogActions>
            <Box color="red" width="100%" display="flex" justifyContent="space-between">
                <Typography variant='caption'>*Required fields</Typography>
                <Button variant='contained' disableElevation color='primary'>Post Job</Button>
            </Box>
        </DialogActions>
    </Dialog>

  )
}
