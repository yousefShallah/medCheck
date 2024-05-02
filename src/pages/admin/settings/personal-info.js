import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function PersonalInfo() {
  return (
    <Box>
      <Box>
        <Typography variant="p"> Personal Information </Typography>
      </Box>
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={6}>
          <Box padding="16px 24px 0px 0px ">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6} padding="16px 24px 0px 0px ">
          <Box>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6} padding="16px 24px 0px 0px ">
          <Box>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6} padding="16px 24px 0px 0px ">
          <Box>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6} padding="16px 24px 0px 0px ">
          <Box>
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6} padding="16px 24px 0px 0px ">
          <Box>
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} padding="16px 24px 0px 0px ">
          <Box>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} padding="16px 24px 0px 0px ">
          <Box>
            <TextField
              id="standard-multiline-static"
              multiline
              rows={4}
              label="Note"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
      <Box
        marginTop="24px"
        display="flex"
        justifyContent="flex-end"
        marginRight="20px"
      >
        <Button variant="contained" disabled>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}

export default PersonalInfo;
