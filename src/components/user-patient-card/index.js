import React from "react";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function UserPatientCard() {
  return (
    <Card
      style={{
        margin: "0px 0px 16px",
        borderRadius: "16px",
        width: "auto",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="16px"
      >
        <Box display="flex" alignItems="flex-start" justifyContent="flex-start">
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            alt="img"
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            height="88px"
          >
            <Box
              marginLeft="16px"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4" fontSize="24px" fontWeight="bold">
                Cameron Williamson
              </Typography>
              <Typography
                variant="h6"
                fontSize="16px"
                fontWeight="500"
                borderRadius="4px"
                padding="8px"
                width="140px"
                marginLeft="1rem"
                bgcolor="#f5f5f5"
              >
                PHN: 9848637699
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography variant="h6" fontSize="16px" margin="0px 16px">
                DOB: 26 Aug, 1997
              </Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant="h6" fontSize="16px" margin="0px 16px">
                Address: 112 Forest Rd New York V2P 2N6
              </Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant="h6" fontSize="16px" margin="0px 16px">
                Phone Number: 604-402-3100
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button
            variant="contained"
            style={{ background: "#1D617A", color: "#fff", fontSize: "15px" }}
          >
            Customize
            <OpenInNewIcon
              style={{ fill: "#fff", marginLeft: "8px", fontSize: "24px" }}
            />
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default UserPatientCard;
