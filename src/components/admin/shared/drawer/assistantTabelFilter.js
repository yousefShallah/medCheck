import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";

function TabelFilter({ action, handelCloseDrawer }) {
  return (
    <Box padding="16px 16px 70px" position="relative">
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        style={{
          cursor: "pointer",
        }}
        onClick={() => handelCloseDrawer("")}
      >
        <CloseIcon
          style={{
            fontSize: "18px",
            color: "#1D617A",
          }}
        />
        <Typography variant="h5" fontSize="14px" color="#1D617A">
          Close
        </Typography>
      </Box>
      <Box margin="16px 0px">
        <Typography
          variant="h5"
          fontSize="14px"
          color="#00000099"
          fontWeight="500"
        >
          Period
        </Typography>
        <Box
          margin="16px 0px"
          sx={{
            "& .MuiFormControl-root": {
              width: "100%",
            },
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
            <DatePicker label="Outlined" fullWidth />
          </LocalizationProvider>
        </Box>
        <Box
          margin="16px 0px"
          sx={{
            "& .MuiFormControl-root": {
              width: "100%",
            },
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Outlined" fullWidth />
          </LocalizationProvider>
        </Box>
      </Box>
      <Box margin="16px 0px">
        <Typography
          variant="h5"
          fontSize="14px"
          color="#00000099"
          fontWeight="500"
          margin="8px 0px"
        >
          Code
        </Typography>
        <Box margin="8px 0px">
          <FormGroup
            sx={{
              "& .MuiTypography-root": {
                fontSize: "16px",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }}
          >
            <FormControlLabel control={<Checkbox />} label="DISP" />
            <FormControlLabel control={<Checkbox />} label="REG" />
            <FormControlLabel control={<Checkbox />} label="DUO" />
            <FormControlLabel control={<Checkbox />} label="MACH" />
          </FormGroup>
        </Box>
      </Box>
      <Box margin="16px 0px">
        <Typography
          variant="h5"
          fontSize="14px"
          color="#00000099"
          fontWeight="500"
        >
          Patient
        </Typography>
        <Box margin={"16px 0px"}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Search By Name
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-search"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              label="Search By Name"
            />
          </FormControl>
          <FormGroup
            sx={{
              "& .MuiTypography-root": {
                fontSize: "16px",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }}
          >
            <FormControlLabel control={<Checkbox />} label="Carolen Mkorl" />
            <FormControlLabel control={<Checkbox />} label="Carolen Mkorl" />
            <FormControlLabel control={<Checkbox />} label="Carolen Mkorl" />
            <FormControlLabel control={<Checkbox />} label="Carolen Mkorl" />
          </FormGroup>
          <Typography
            variant="span"
            fontSize="16px"
            color="#1D617A"
            style={{ textDecoration: "underline" }}
          >
            Show more
          </Typography>
        </Box>
      </Box>
      <Box margin="16px 0px">
        <Typography
          variant="h5"
          fontSize="14px"
          color="#00000099"
          fontWeight="500"
        >
          Pharmacist
        </Typography>
        <Box margin={"16px 0px"}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Search By Name
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-search"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              label="Search By Name"
            />
          </FormControl>
          <FormGroup
            sx={{
              "& .MuiTypography-root": {
                fontSize: "16px",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }}
          >
            <FormControlLabel control={<Checkbox />} label="Carolen Mkorl" />
            <FormControlLabel control={<Checkbox />} label="Carolen Mkorl" />
            <FormControlLabel control={<Checkbox />} label="Carolen Mkorl" />
            <FormControlLabel control={<Checkbox />} label="Carolen Mkorl" />
          </FormGroup>
          <Typography
            variant="span"
            fontSize="16px"
            color="#1D617A"
            style={{ textDecoration: "underline" }}
          >
            Show more
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px"
        position="fixed"
        bottom="0px"
        // left="0px"
        right="14px"
        bgcolor="#f5f5f5"
        width="446px"
      >
        <Button
          variant="outlined"
          style={{
            borderColor: "#1D617A",
            color: "#1D617A",
            fontSize: "15px",
            fontWeight: "600",
            width: "220px",
            height: "42px",
          }}
        >
          Rest
        </Button>
        <Button
          variant="contained"
          style={{
            borderColor: "#1D617A",
            background: "#1D617A",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "600",
            marginLeft: "8px",
            width: "220px",
            height: "42px",
          }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
}

export default TabelFilter;
