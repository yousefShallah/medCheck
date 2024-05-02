import React, { useState } from "react";
import "./index.scss";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Card,
  MenuList,
} from "@mui/material";
import MenuItem from "./menuItem";
import CardComp from "./card";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import { dummyDataPatches } from "./data";
import CardTwo from "./card-tow";

function FinalView() {
  const [activeMedicine, setActiveMedicine] = useState(0);
  const [activeMedicineFinalView, setActiveMedicineFinalView] = useState(false);
  const [leftHandMode, setLeftHandMode] = useState(false); // eslint-disable-line
  const handelSelecteNewMedicine = (index) => {
    setActiveMedicine(index);
    setActiveMedicineFinalView(false);
  };
  const handelFinalView = () => {
    setActiveMedicineFinalView(!activeMedicineFinalView);
    // dummyDataPatches
  };
  return (
    <Box bgcolor="#f5f5f5" height="auto" className="user-paient-cards">
      {/* <Button onClick={() => setLeftHandMode(!leftHandMode)}>
        left Hand Mode
      </Button> */}
      <Grid
        container
        columns={{ xs: 4, md: 12 }}
        flexDirection={leftHandMode ? "row-reverse" : "row"}
      >
        <Grid item xs={3.3}>
          <Card
            className="box-body user-profile"
            style={{
              margin: "16px",
              padding: "0px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              borderRadius: "16px",
              height: "125px",
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
          </Card>
          <Box height="69vh">
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
                  paddingRight: "8px",
                }}
              >
                <MenuList>
                  {dummyDataPatches?.map((item, index) => {
                    return (
                      <Box>
                        {index !== 0 && <Divider />}
                        <Box
                          bgcolor={
                            activeMedicineFinalView
                              ? index === activeMedicine
                                ? "#E1F5FE"
                                : index === 2
                                ? "#FEEBEE"
                                : "#E1F5FE"
                              : index === activeMedicine
                              ? "#E1F5FE"
                              : index === 2
                              ? "#FEEBEE"
                              : "#fff"
                          }
                          padding="8px"
                          borderBottom={
                            activeMedicineFinalView ? "2px solid" : "none"
                          }
                          border={
                            !activeMedicineFinalView &&
                            index !== 2 &&
                            "3px solid"
                          }
                          borderRadius="4px"
                          borderColor={
                            activeMedicineFinalView
                              ? index === activeMedicine
                                ? "#C5E1A5"
                                : index === 2
                                ? "#FECDD2"
                                : "#C5E1A5"
                              : index === activeMedicine
                              ? "#1D617A"
                              : index === 2
                              ? "#FECDD2"
                              : "#fff"
                          }
                          onClick={() => handelSelecteNewMedicine(index)}
                        >
                          <MenuItem item={item} />
                        </Box>
                      </Box>
                    );
                  })}
                </MenuList>
              </Box>
              <Box width="100%" padding="24px 0px 8px">
                <Button
                  variant="contained"
                  endIcon={<PresentToAllIcon />}
                  style={{
                    background: "#1D617A",
                    color: "#fff",
                    width: "100%",
                  }}
                  onClick={() => handelFinalView()}
                >
                  Final View
                </Button>
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
              {activeMedicine === 1 ? (
                <CardTwo />
              ) : (
                <CardComp
                  activeMedicineFinalView={activeMedicineFinalView}
                  leftHandMode={leftHandMode}
                />
              )}
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FinalView;
