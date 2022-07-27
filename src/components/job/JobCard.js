import React from 'react'
import { Box,Grid,Typography, Button, makeStyles } from '@material-ui/core'

const skills = ["Javascript", "React.js", "Node.js"]

const useStyles = makeStyles((theme)=>(
    {
        wrapper: {
            border:" 1px solid #e8e8e8",
            cursor:"pointer", 
            transition: ".3s",

            borderRadius : "5px",
            "&:hover":{
                boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
                borderLeft: "6px solid #4D64E4",
            }

    
          },
          companyName :{
            fontSize:"13.px",
            backgroundColor: "gold",
            padding: theme.spacing(0.75),
            borderRadius : "5px",
            width: "60px",
            fontWeight:600,
          },
          skillChip:{
            margin: theme.spacing(0.5),
            padding: theme.spacing(0.75),
            fontSize: "14.5px",
            borderRadius: "5px",
            // transition: ".3s",
            fontWeight:600,
            backgroundColor: "cyan"
            // theme.palette.secondary.main,
            // color: "fff"
          },
    }))

export default function JobCard({id, company, jobtype}) {
    // console.log(jobs)
    const classes= useStyles();
  return (
    <Box p={2} className={classes.wrapper} key={id}>
       { <Grid container alignItems='center'>
            <Grid item xs>
                <Typography variant ="subtitle1">{jobtype}</Typography>
                <Typography className={classes.companyName} variant ="subtitle2">{company}</Typography>

            </Grid>
            <Grid item container xs>
                {skills.map((skill)=> 
                (<Grid className={classes.skillChip} key={skill} item>{skill}</Grid>)
                )}
            </Grid>
            <Grid item container direction='column' color="white" alignItems='flex-end' xs>
                <Grid item>
                <Typography variant ="caption">
                    2577 min ago | Fulltime | Remote
                </Typography>

                </Grid>
                <Grid item>
                    <Box mt={2}>
                    <Button variant= "outlined">
                        Check
                    </Button>
                    </Box>
                </Grid>

            </Grid>

        </Grid>}
    </Box>
  )
}
