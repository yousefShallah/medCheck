import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function AddNewAssistant({ data, handelCloseDrawer, action }) {
  /* if we have data I will change the action buttons names and set the data on fields as default. if no data just let the inputs as empty */
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="24px 16px"
      >
        <Typography
          variant="h5"
          fontSize="24"
          color="#000000DE"
          fontWeight="600"
        >
          {action === "EditAssistant"
            ? "Edit Assistant Details"
            : "Add New Assistant"}
        </Typography>
        <CloseIcon
          style={{
            color: "#0000008F",
            fontSize: "24px",
            cursor: "pointer",
          }}
          onClick={() => handelCloseDrawer()}
        />
      </Box>
      <Box padding="0px 16px">
        <Box component="form" autoComplete="off">
          <Grid container columns={{ xs: 4, md: 12 }}>
            <Grid item xs={12}>
              <Box padding="8px 16px 8px 0px">
                <Typography
                  variant="h5"
                  fontSize="14px"
                  color="#00000099"
                  fontWeight="400"
                >
                  Personal Information
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box padding="8px 16px 8px 0px">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  required
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "14px",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box padding="8px 0px 8px 0px">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  required
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "14px",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box padding="8px 16px 8px 0px">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Email"
                  variant="outlined"
                  required
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "14px",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box padding="8px 0px 8px 0px">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  required
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "14px",
                    },
                  }}
                />
              </Box>
            </Grid>
            {/*  Address */}
            <Grid item xs={12}>
              <Box padding="16px 16px 8px 0px">
                <Typography
                  variant="h5"
                  fontSize="14px"
                  color="#00000099"
                  fontWeight="400"
                >
                  Address
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box padding="8px 16px 8px 0px">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    { label: "The Shawshank Redemption", year: 1994 },
                    { label: "The Godfather", year: 1972 },
                    { label: "The Godfather: Part II", year: 1974 },
                  ]}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country"
                      required
                      sx={{
                        "& .MuiInputBase-input": {
                          padding: "14px",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box padding="8px 0px 8px 0px">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    { label: "The Shawshank Redemption", year: 1994 },
                    { label: "The Godfather", year: 1972 },
                    { label: "The Godfather: Part II", year: 1974 },
                  ]}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="City"
                      required
                      sx={{
                        "& .MuiInputBase-input": {
                          padding: "14px",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box padding="8px 0px 8px 0px">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Address"
                  variant="outlined"
                  required
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "14px",
                    },
                  }}
                />
              </Box>
            </Grid>
            {/* Note */}
            <Grid item xs={12}>
              <Box padding="16px 0px 8px 0px">
                <Typography
                  variant="h5"
                  fontSize="14px"
                  color="#00000099"
                  fontWeight="400"
                >
                  Note
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box padding="8px 0px 8px 0px">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Note"
                  variant="outlined"
                  required
                  sx={{
                    "& .MuiInputBase-input": {
                      padding: "14px",
                    },
                  }}
                  rows={3}
                  multiline
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        bgcolor="#f5f5f5"
        height="80px"
        padding="0px 16px"
        position="absolute"
        bottom="0px"
        left="0px"
        right="0px"
      >
        <Grid
          container
          columns={{ xs: 4, md: 12 }}
          alignItems="center"
          height="100%"
        >
          <Grid item xs={6}>
            <Box marginRight="4px">
              <Button
                variant="outlined"
                fullWidth
                style={{
                  borderColor: "#1D617A",
                  color: "#1D617A",
                }}
              >
                REST
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box marginLeft="4px">
              <Button
                variant="contained"
                fullWidth
                style={{
                  background: "#1D617A",
                  color: "#ffffff",
                }}
              >
                {action === "EditAssistant" ? "Edit" : "ADD"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AddNewAssistant;
