import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import overViewImg from "./SVG_IMG.svg";
import DynamicTabel from "../../../components/dynamic-tabel";
import { userProfileColumns, userProfileRows } from "./data";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useNavigate } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DrawerCard from "../../../components/admin/shared/drawer/drawerCard";

function PatientsProfile() {
  const [drawerAction, setDrawerAction] = useState("");

  const navigate = useNavigate();
  const rowClickCallback = (data) => {
    navigate(`/admin/2/blisterpacks`);
  };
  return (
    <Box bgcolor="#f5f5f5">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={3.5}>
          <Box>
            <Card
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
                  width: "88px",
                  height: "88px",
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
                  Darlene Robertson
                </Typography>
                <Typography
                  variant="h6"
                  fontSize="16px"
                  fontWeight="500"
                  bgcolor="#F5F5F5"
                  borderRadius="4px"
                  padding="8px"
                  width="140px"
                  marginTop="16px"
                >
                  PHN: 9848637699
                </Typography>
              </Box>
            </Card>
          </Box>
          <Box>
            <Card
              style={{
                margin: "16px",
                padding: "16px 16px 0px",
                borderRadius: "16px",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  fontSize="20px"
                  color="#00000099"
                  fontWeight="400"
                  margin="8px 0px 0px"
                >
                  Details
                </Typography>
              </Box>
              <Box padding="16px 0px">
                <Box>
                  <Typography
                    variant="h5"
                    fontSize="14px"
                    color="#00000061"
                    fontWeight="400"
                    margin="8px 0px 0px"
                  >
                    DOB
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize="18px"
                    color="#000000DE"
                    fontWeight="400"
                    margin="4px 0px 8px"
                  >
                    22 Oct, 2020
                  </Typography>
                  <Divider />
                </Box>
                {/* 2 */}
                <Box>
                  <Typography
                    variant="h5"
                    fontSize="14px"
                    color="#00000061"
                    fontWeight="400"
                    margin="8px 0px 0px"
                  >
                    Facility
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize="18px"
                    color="#000000DE"
                    fontWeight="400"
                    margin="4px 0px 8px"
                  >
                    Facility Name
                  </Typography>
                  <Divider />
                </Box>
                {/* 3 */}
                <Box>
                  <Typography
                    variant="h5"
                    fontSize="14px"
                    color="#00000061"
                    fontWeight="400"
                    margin="8px 0px 0px"
                  >
                    Address
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize="18px"
                    color="#000000DE"
                    fontWeight="400"
                    margin="4px 0px 8px"
                  >
                    112 Forest Rd New York V2P 2N6
                  </Typography>
                  <Divider />
                </Box>
                {/* 4 */}
                <Box>
                  <Typography
                    variant="h5"
                    fontSize="14px"
                    color="#00000061"
                    fontWeight="400"
                    margin="8px 0px 0px"
                  >
                    Phone Number
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize="18px"
                    color="#000000DE"
                    fontWeight="400"
                    margin="4px 0px 0px"
                  >
                    604-402-3100
                  </Typography>
                </Box>
                {/* end */}
              </Box>
            </Card>
          </Box>
          <Box>
            <Card
              style={{
                margin: "16px",
                padding: "16px",
                borderRadius: "16px",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h5"
                  fontSize="20px"
                  color="#00000099"
                  fontWeight="400"
                  margin="8px 0px 0px"
                >
                  Note
                </Typography>
                <ModeEditIcon
                  style={{
                    fontSize: "20px",
                    color: "#1D617A",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  fontSize="16px"
                  color="#00000099"
                  fontWeight="400"
                  margin="16px 0px 8px"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </Typography>
                <Typography
                  variant="h5"
                  fontSize="14px"
                  color="#00000061"
                  fontWeight="400"
                >
                  Last Modified: 15 June, 2023
                </Typography>
              </Box>
            </Card>
          </Box>
          {/* ..... */}
          <Box>
            <Card
              style={{
                margin: "16px",
                padding: "16px 16px 0px",
                borderRadius: "16px",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  fontSize="20px"
                  color="#00000099"
                  fontWeight="400"
                  margin="8px 0px 0px"
                >
                  Emergency Contact​
                </Typography>
              </Box>
              <Box padding="16px 0px">
                <Box>
                  <Typography
                    variant="h5"
                    fontSize="14px"
                    color="#00000061"
                    fontWeight="400"
                    margin="8px 0px 0px"
                  >
                    Name
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize="18px"
                    color="#000000DE"
                    fontWeight="400"
                    margin="4px 0px 8px"
                  >
                    Darlene Robertson
                  </Typography>
                  <Divider />
                </Box>
                {/* 2 */}
                <Box>
                  <Typography
                    variant="h5"
                    fontSize="14px"
                    color="#00000061"
                    fontWeight="400"
                    margin="8px 0px 0px"
                  >
                    Phone Number
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize="18px"
                    color="#000000DE"
                    fontWeight="400"
                    margin="4px 0px 4px"
                  >
                    604-402-3100
                  </Typography>
                </Box>
                {/* end */}
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={8.5}>
          <Box margin="16px 16px 16px 0px">
            <Box>
              <Accordion
                sx={{
                  "& .MuiAccordion-root": {
                    borderRadius: "16px !important",
                  },
                }}
                defaultExpanded={true}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>OverView</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    width="100%"
                    style={{
                      overflowX: "scroll",
                    }}
                  >
                    <img src={overViewImg} alt="img" />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box marginTop="16px" height="89vh">
              <Card
                style={{
                  borderRadius: "16px",
                  height: "100%",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  padding="16px"
                >
                  <Button
                    variant="outlined"
                    style={{
                      borderColor: "#1D617A",
                      color: "#1D617A",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                    onClick={() => setDrawerAction("PatientsTabelFilter")}
                  >
                    Filter <FilterAltIcon style={{ fontSize: "20px" }} />
                  </Button>
                </Box>
                <DynamicTabel
                  rows={userProfileRows}
                  columns={userProfileColumns}
                  paginationSize={[10, 20, 30]}
                  rowClickCallback={(data) => rowClickCallback(data)}
                />
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {drawerAction && (
        <DrawerCard
          action={drawerAction}
          setDrawerAction={(action) => setDrawerAction(action)}
          width="480px"
        />
      )}
    </Box>
  );
}

export default PatientsProfile;
