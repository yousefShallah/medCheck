import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import BackHandIcon from "@mui/icons-material/BackHand";
import LockIcon from "@mui/icons-material/Lock";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Divider, Switch, Typography } from "@mui/material";

function SettingsCard() {
  return (
    <Box className="settings-card-container">
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px 0px"
        cursor="pointer"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <BackHandIcon
            style={{
              fill: "#00000040",
              fontSize: "20px",
              marginRight: "16px",
            }}
          />
          <Typography variant="span" fontSize="16px" color="#00000099">
            Left Hand Mode
          </Typography>
        </Box>
        <Switch
          style={{
            fill: "#00000040",
            fontSize: "20px",
            marginRight: "16px",
          }}
        />
      </Box>
      <Divider
        style={{
          fill: "#00000040",
          fontSize: "20px",
          marginRight: "16px",
        }}
      />
      <Button>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="10px 0px"
        >
          <ModeEditIcon
            style={{
              fill: "#00000040",
              fontSize: "20px",
              marginRight: "16px",
            }}
          />
          <Typography variant="span" fontSize="16px" color="#00000099">
            Edit Profile
          </Typography>
        </Box>
      </Button>
      <Divider />
      <Button>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="10px 0px"
        >
          <LockIcon
            style={{
              fill: "#00000040",
              fontSize: "20px",
              marginRight: "16px",
            }}
          />
          <Typography variant="span" fontSize="16px" color="#00000099">
            Rest Password
          </Typography>
        </Box>
      </Button>
      <Divider />
      <Button>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="10px 0px"
        >
          <ReportProblemIcon
            style={{
              fill: "#00000040",
              fontSize: "20px",
              marginRight: "16px",
            }}
          />
          <Typography variant="span" fontSize="16px" color="#00000099">
            Deactivate Account
          </Typography>
        </Box>
      </Button>
      <Divider />
      <Button
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 0rem",
          cursor: "pointer",
          color: "#C62828",
          fontSize: "16px",
        }}
      >
        <Box
          className="delete"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <DeleteIcon style={{ fill: "#C62828", marginRight: "16px" }} />
          <Typography variant="span" fontSize="16px">
            Delete Account
          </Typography>
        </Box>
      </Button>
    </Box>
  );
}

export default SettingsCard;
