import React, { useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import upload from "../../../images/upload.png";
import SettingsCard from "./settings-card";
import PersonalInfo from "./personal-info";

function AdminSettingsCard() {
  const [profileImage, setProfileImage] = useState(null);

  const handelUploadImage = (event) => {
    if (event.target.files[0]) {
      var file = event.target.files[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setProfileImage(objectUrl);
      }
    }
  };

  return (
    <Box padding="16px" bgcolor="#f5f5f5">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={9} className="info-card-container" padding="0px 16px">
          <Card
            style={{
              borderRadius: "16px",
              padding: "16px 24px",
              height: "83vh",
            }}
          >
            <Box>
              <Box className="info-card-title">
                <Typography variant="h6"> Settings </Typography>
              </Box>
              <Box className="info-card-image">
                {/* <Typography variant="p"> Profile </Typography> */}
                <Box
                  className="upload-section"
                  display="flex"
                  alignItems="center"
                >
                  <Box className="upload-box" padding="16px 0px">
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="raised-button-file"
                      multiple
                      type="file"
                      onChange={(event) => handelUploadImage(event)}
                    />
                    <label htmlFor="raised-button-file">
                      <Button
                        variant="raised"
                        component="span"
                        style={{ padding: "0px" }}
                      >
                        <img
                          src={profileImage ? profileImage : upload}
                          className="user-image"
                          alt="img"
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </Button>
                    </label>
                  </Box>
                  <Box className="upload-text" marginLeft="16px">
                    <Typography variant="h6" fontSize="24px">
                      Upload Your Pic
                    </Typography>
                    <Typography variant="p" color="#00000060" fontSize="14px">
                      Photo should be at least 300px X 300px
                    </Typography>
                    <Box className="upload-text-btns" marginTop="16px">
                      <label htmlFor="raised-button-file">
                        <Button
                          variant="outlined"
                          component="span"
                          className="upload"
                          style={{
                            borderColor: "#1D617A",
                            color: "#1D617A",
                          }}
                        >
                          upload new photo
                        </Button>
                      </label>
                      <Button
                        variant="outlined"
                        className="remove"
                        style={{
                          borderColor: "#D32F2F",
                          color: "#D32F2F",
                          marginLeft: "16px",
                        }}
                        onClick={() => setProfileImage(null)}
                      >
                        Remove
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <PersonalInfo />
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          xs={3}
          className="settings-card-container"
          padding="0px 16px"
        >
          <Card
            style={{
              borderRadius: "16px",
              padding: "16px 24px",
              height: "auto",
            }}
          >
            <Box>
              <SettingsCard />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminSettingsCard;
