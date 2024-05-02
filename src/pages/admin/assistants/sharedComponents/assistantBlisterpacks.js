import React from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  Card,
  MenuList,
  Chip,
  Avatar,
} from "@mui/material";
import MenuItem from "../../../../components/finalView/menuItem";
import BlisterpacksCard from "./blisterpacksCard";
import { dummyDataPatches } from "./data";

function AssistantBlisterPacks() {
  return (
    <Box bgcolor="#f5f5f5" height="auto">
      <Grid container columns={{ xs: 4, md: 12 }} flexDirection={"row"}>
        <Grid item xs={3.3}>
          <Card
            className="box-body user-profile"
            style={{
              margin: "16px",
              borderRadius: "16px",
              height: "230px",
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "16px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
                alt="img"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
              <Box
                marginLeft="16px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography variant="h4" fontSize="24px" fontWeight="600">
                  Cameron Williamson
                </Typography>
                <Typography
                  variant="h6"
                  fontSize="16px"
                  fontWeight="500"
                  bgcolor="#F5F5F5"
                  borderRadius="4px"
                  padding="8px"
                  width="150px"
                  marginTop="16px"
                >
                  PHN: 9848637699
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Chip
                avatar={
                  <Avatar
                    style={{
                      fontSize: "14px",
                      width: "20px",
                      height: "20px",
                      padding: "4px",
                      background: "#1D617A",
                      color: "#ffffff",
                    }}
                  >
                    OP
                  </Avatar>
                }
                label="Assistant: Assistant Name"
                style={{
                  width: "220px",
                  margin: "4px 16px",
                  display: "flex",
                  justifyContent: "flex-start",
                  background: "#fff",
                  border: "2px solid #1D617A",
                  color: "#1D617A",
                  height: "35px",
                  fontSize: "14px",
                }}
              />
              <Chip
                avatar={
                  <Avatar
                    style={{
                      fontSize: "14px",
                      width: "20px",
                      height: "20px",
                      padding: "4px",
                      background: "#1D617A",
                      color: "#ffffff",
                    }}
                  >
                    OP
                  </Avatar>
                }
                label="Pharmacist: Pharmacist Name"
                style={{
                  width: "250px",
                  margin: "4px 16px",
                  display: "flex",
                  justifyContent: "flex-start",
                  background: "#fff",
                  border: "2px solid #1D617A",
                  color: "#1D617A",
                  height: "35px",
                  fontSize: "14px",
                }}
              />
            </Box>
          </Card>
          <Box height="59vh">
            <Card
              style={{
                margin: "16px",
                padding: "16px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                fontSize="14px"
                color="#00000061"
                padding="8px 0px 16px"
              >
                Medicine
              </Typography>
              <Box
                style={{
                  overflowY: "scroll",
                  height: "65vh",
                }}
              >
                <MenuList
                  style={{
                    padding: "0px",
                  }}
                >
                  {dummyDataPatches?.map((item, index) => {
                    return (
                      <Box>
                        {index !== 0 && <Divider />}
                        <Box
                          bgcolor={index === 2 ? "#FEEBEE" : "#F1F8E9"}
                          padding="8px"
                        >
                          <MenuItem item={item} />
                        </Box>
                      </Box>
                    );
                  })}
                </MenuList>
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={8.7}>
          <Box height="92%">
            <Card
              style={{
                padding: "16px",
                margin: "16px 16px 16px 0px",
                borderRadius: "16px",
                height: "100%",
              }}
            >
              <BlisterpacksCard />
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AssistantBlisterPacks;
