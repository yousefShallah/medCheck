import "./index.scss";
import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import ArrowBottom from "../../images/icons/ArrowDropDownFilled.svg";
import userProfile from "../../images/icons/Pic.png";

function Navbar({ navTitle, user }) {
  const [currentDate, setCurrentDate] = useState("0.0.0"); // eslint-disable-line
  const [currentTime, setCurrentTime] = useState("00:00");
  const [dateNow, setDateNow] = useState("");
  const [currentTimeStamp, setCurrentTimeStamp] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handelSelect = () => {
    navigate("/user/settings");
  };
  const handelclose = () => {
    setAnchorEl(null);
  };

  const handelLogout = () => {
    console.log("logout");
    navigate("/admin/login");
  };

  useEffect(() => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day} / ${month} / ${year}`;

    let hours = date.getHours();
    let minutes = date.getMinutes();

    var stamp = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    setCurrentDate(currentDate);
    setCurrentTime(strTime);
    setCurrentTimeStamp(stamp);
    const interval = setInterval(() => setDateNow(Date.now), 1000);
    return () => clearInterval(interval);
  }, [dateNow]);

  const breadcrumbs = navTitle?.map((item) => {
    return (
      <Link href={item.url} className="breadcrumb-link">
        {item.text ? item.text : item || ""}
      </Link>
    );
  });

  return (
    <Box className="patches-navbar-container">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={4} className="nav-links">
          {/* <span>  {navTitle} </span> */}
          <Link className="breadcrumb-link-container">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Link>
        </Grid>
        <Grid item xs={4} className="nav-time">
          {/* <span> {currentDate} </span> */}
          <Typography
            variant="span"
            color=" #00000080"
            textAlign="center"
            fontSize="12px"
            fontWeight="400"
            margin="8px 0rem 0rem"
          >
            29 May 2023
          </Typography>
          <Typography
            variant="h2"
            color=" #000000"
            textAlign="center"
            fontSize="27px"
            fontWeight="500"
            margin="8px 0rem 0rem"
          >
            {currentTime}
            <Typography
              variant="span"
              color=" #000000"
              textAlign="center"
              fontSize="20px"
              fontWeight="500"
              marginLeft="4px"
            >
              {currentTimeStamp}
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={4} className="nav-user">
          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <img
                src={userProfile}
                style={{
                  width: "40px",
                  height: "40px",
                }}
                alt="img"
              />
              <Box className="user">
                <Box className="username">
                  <p> Jessica Name </p>
                  <img src={ArrowBottom} className="profile-arrow" alt="img" />
                </Box>
                <span> Assestant </span>
              </Box>
            </IconButton>
            {/* </Tooltip> */}
          </Box>
        </Grid>
      </Grid>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handelclose}
        onClick={handelclose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "200px",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {user !== "admin" && (
          <MenuItem onClick={handelSelect}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        )}
        {user !== "admin" && <Divider />}
        <MenuItem onClick={handelLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Navbar;
