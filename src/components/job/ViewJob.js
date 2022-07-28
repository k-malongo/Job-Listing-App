import React from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

export default function ViewJob({ open, closeJob , check }) {
  return (
    <Dialog open={check} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          More Details
          <IconButton>
            <CloseIcon onClick={closeJob} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
