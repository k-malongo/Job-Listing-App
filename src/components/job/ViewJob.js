import React from 'react'
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

export default function ViewJob() {
  return (
    <Dialog open={true}>
    <DialogTitle>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      Post Job
      <IconButton>
        <CloseIcon />
      </IconButton>
    </Box>
  </DialogTitle>
  <DialogContent>

  </DialogContent>
  <DialogActions>

  </DialogActions>
  </Dialog>
  )
}
