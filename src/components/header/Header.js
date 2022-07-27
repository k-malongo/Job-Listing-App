import React, { useState} from 'react'
import { Box,Grid,Typography, Button } from '@material-ui/core'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <Box py={10} bgcolor="secondary.main" color="white">
      <Grid container justifyContent="center"> 
        <Grid item xs={10}> 
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">Open Job Listing</Typography>
          <Typography variant="h5">Testimonials</Typography>
          <Button onClick={()=> setOpen(true)} variant="contained" color="primary" >
            Post job
          </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

