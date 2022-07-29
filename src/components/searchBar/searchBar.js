import React from 'react'
import { Box, Button, MenuItem,Select, makeStyles, FilledInput } from '@material-ui/core'

 const useStyles =  makeStyles(
  {
    wrapper: {
      backgroundColor: "#fff",
      display : "flex",
      boxShadow : "0px 1px 5px rgba(0, 0, 0, 0.1)",
      borderRadius : "2px",
      "& > *":{
        flex:1,
        height:"45px",
        margin: "8px"
      },
    }
  }
)
export default function SearchBar({searchFunction}) {
  const classes = useStyles()
  return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper} >

      <FilledInput 
      placeholder='Search for job'
      onChange={(e)=> searchFunction(e.target.value)}
      />
        
        {/* <Select disableUnderline variant="filled" defaultValue ="Full Time">
            <MenuItem value="Full Time"> Full time</MenuItem>
            <MenuItem value="Part Time"> Part time</MenuItem>
            <MenuItem value="Contract"> Contract </MenuItem>

        </Select>
        <Select disableUnderline variant="filled" defaultValue ="Remote">
            <MenuItem value="Remote"> Remote</MenuItem>
            <MenuItem value="In Office"> In Office</MenuItem>

        </Select>
        <Button variant="contained" color="primary" >
            Filter
          </Button> */}
    </Box>
  )
}
