import React, { useState } from "react";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  Card,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
} from "@mui/material";
import AssistantTabel from "./pharmacises-tabel";
import AssistantDetails from "./pharmacises-details";
import TabPanelComponent from "../../../components/TabPanel";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import GetAppIcon from "@mui/icons-material/GetApp";
import DrawerCard from "../../../components/admin/shared/drawer/drawerCard";
import QRCode from "../../../images/Barcode.png";
import PharmacisesLog from "./pharmacises-log";

function AssistantProfile() {
  const [value, setValue] = useState(0);
  const [drawerAction, setDrawerAction] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpenDialog = (action) => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handelClickQRCode = () => {
    setOpen(false);
  };

  const renderCheckDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            maxWidth: "790px",
          },
        }}
      >
        <DialogContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className="text-box">
              <Typography variant="h6"> Scan Barcode </Typography>
              <ul>
                <li style={{ fontSize: "16px", marginTop: "1rem" }}>
                  Direct the package toward the machine to read the code
                </li>
                <li style={{ fontSize: "16px", marginTop: "1rem" }}>
                  If there are any issues with the code, enter the DIN number.
                </li>
              </ul>
            </Box>
            <Divider
              orientation="vertical"
              style={{ height: "250px", padding: "0px 8px", marginTop: "16px" }}
            />
            <Box className="qr-code-box">
              <Button onClick={() => handelClickQRCode()}>
                <img src={QRCode} alt="img" style={{ width: "350px" }} />
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            style={{
              color: "#1D617A",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box>
      <Box bgcolor="#f5f5f5">
        <Grid container columns={{ xs: 4, md: 12 }}>
          <Grid item xs={3.5}>
            <AssistantDetails />
          </Grid>
          <Grid item xs={8.5}>
            <Box margin="16px 16px 16px 0px">
              <Card
                style={{
                  borderRadius: "16px",
                  height: "100%",
                }}
              >
                <Box>
                  <Grid container columns={{ xs: 4, md: 12 }}>
                    <Grid item xs={8}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        TabIndicatorProps={{
                          style: {
                            backgroundColor: "#1D617A",
                          },
                        }}
                        sx={{
                          "& .MuiTab-textColorPrimary": {
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#00000061",
                            textTransform: "uppercase",
                          },
                          "& .Mui-selected": {
                            color: "#1D617A !important",
                          },
                        }}
                      >
                        <Tab label="Blister Pack​s" />
                        <Tab label="Logs" />
                      </Tabs>
                    </Grid>
                    <Grid item xs={4}>
                      {value === 0 ? (
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
                            onClick={() => setDrawerAction("TabelFilter")}
                          >
                            Filter
                            <FilterAltIcon style={{ fontSize: "20px" }} />
                          </Button>
                          <Button
                            variant="contained"
                            style={{
                              borderColor: "#1D617A",
                              background: "#1D617A",
                              color: "#fff",
                              fontSize: "14px",
                              fontWeight: "600",
                              marginLeft: "8px",
                            }}
                            onClick={handleClickOpenDialog}
                          >
                            Scan barcode
                            <QrCode2Icon style={{ fontSize: "20px" }} />
                          </Button>
                        </Box>
                      ) : (
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
                            onClick={() => setDrawerAction("LogFilter")}
                          >
                            Filter
                            <FilterAltIcon style={{ fontSize: "20px" }} />
                          </Button>
                          <Button
                            variant="contained"
                            style={{
                              borderColor: "#1D617A",
                              background: "#1D617A",
                              color: "#fff",
                              fontSize: "14px",
                              fontWeight: "600",
                              marginLeft: "8px",
                            }}
                          >
                            Export
                            <GetAppIcon style={{ fontSize: "20px" }} />
                          </Button>
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </Box>
                <TabPanelComponent value={value} index={0}>
                  <AssistantTabel />
                </TabPanelComponent>
                <TabPanelComponent value={value} index={1}>
                  <PharmacisesLog />
                </TabPanelComponent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {drawerAction && (
        <DrawerCard
          action={drawerAction}
          setDrawerAction={(action) => setDrawerAction(action)}
          width="480px"
        />
      )}
      {renderCheckDialog()}
    </Box>
  );
}

export default AssistantProfile;
