import React from "react";
import "./index.scss";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LoginHeader from "../../../images/admin/login-header.png";
import LoginLogo from "../../../images/admin/Logo.png";

function Login() {
  return (
    <Box className="login-container">
      <Grid container columns={{ xs: 4, md: 12 }} className="login-box">
        <Grid item xs={7}>
          <Box className="login-image-header">
            <img src={LoginHeader} alt="img" />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box className="login-form">
            <Box className="logo">
              <img src={LoginLogo} alt="img" />
            </Box>
            <Box className="form-container">
              <Typography variant="h5"> Log In </Typography>
              <Typography variant="span"> Welcome back again </Typography>
              <Box className="form-inputs">
                <TextField
                  id="outlined-basic"
                  label="ID"
                  variant="outlined"
                  className="input"
                />
                <TextField
                  id="outlined-basic"
                  label="User Name or Email"
                  variant="outlined"
                  className="input"
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className="input"
                />
              </Box>
              <Typography variant="h6"> Forget Password? </Typography>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
              </FormGroup>
              <Box className="login-btn">
                <Button variant="contained"> Login </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
