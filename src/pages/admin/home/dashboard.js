import React, { useState } from "react";
import { Box, Card, Grid, Tab, Tabs, Typography } from "@mui/material";
import Chart from "./chart";
import TabPanelComponent from "../../../components/TabPanel";
import ChartCard from "./chart-card";
import ActivityCard from "./activity-card";

function Dashboard() {
  const [value, setValue] = useState(0);
  const [blisterPackvalue, setBlisterPackvalue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeBlisterPackvalue = (event, newValue) => {
    setBlisterPackvalue(newValue);
  };

  return (
    <Box padding="16px 16px">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={4}>
          <Card
            style={{
              margin: "0px 8px",
              borderRadius: "12px",
              height: "500px",
            }}
          >
            <Box
              sx={{ borderBottom: 1, borderColor: "divider" }}
              padding="0px 12px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              style={{ border: "none" }}
            >
              <Typography>Patients</Typography>
              <Tabs
                value={value}
                onChange={handleChange}
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
                <Tab label="Last Week" />
                <Tab label="Last Month" />
                <Tab label="Custom" />
              </Tabs>
            </Box>
            <TabPanelComponent value={value} index={0}>
              <Box padding="16px 0px">
                <Chart
                  chartLabels={["Old", "New"]}
                  chartSeries={[33, 22]}
                  tag="patient-LastWeek"
                  legend={false}
                  legendPosition="bottom"
                  colors={["#1E8D77", "#363636"]}
                />
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  borderTop="1px solid #ddd"
                  padding="24px 16px"
                >
                  {[
                    { label: "Old", color: "#1E8D77" },
                    { label: "New", color: "#363636" },
                  ].map((item) => {
                    return (
                      <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        margin="0px 24px 0px 0px"
                      >
                        <Box
                          width="12px"
                          height="12px"
                          bgcolor={item.color}
                          borderRadius="100%"
                          margin="0px 8px 0px 0px"
                        ></Box>
                        <Typography
                          variant="h5"
                          fontSize="16px"
                          color="#040404"
                        >
                          {item.label}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </TabPanelComponent>
            <TabPanelComponent value={value} index={1}>
              <Box padding="16px 0px">
                <Chart
                  chartLabels={["Old", "New"]}
                  chartSeries={[44, 33]}
                  tag="patient-LastWeek"
                  legend={false}
                  legendPosition="bottom"
                  colors={["#1E8D77", "#363636"]}
                />
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  borderTop="1px solid #ddd"
                  padding="24px 16px"
                >
                  {[
                    { label: "Old", color: "#1E8D77" },
                    { label: "New", color: "#363636" },
                  ].map((item) => {
                    return (
                      <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        margin="0px 24px 0px 0px"
                      >
                        <Box
                          width="12px"
                          height="12px"
                          bgcolor={item.color}
                          borderRadius="100%"
                          margin="0px 8px 0px 0px"
                        ></Box>
                        <Typography variant="h5" fontSize="16px">
                          {item.label}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </TabPanelComponent>
            <TabPanelComponent value={value} index={2}>
              <Box padding="16px 0px">
                <Chart
                  chartLabels={["Old", "New"]}
                  chartSeries={[22, 44]}
                  tag="patient-LastWeek"
                  legend={false}
                  legendPosition="bottom"
                  colors={["#1E8D77", "#363636"]}
                />
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  borderTop="1px solid #ddd"
                  padding="24px 16px"
                >
                  {[
                    { label: "Old", color: "#1E8D77" },
                    { label: "New", color: "#363636" },
                  ].map((item) => {
                    return (
                      <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        margin="0px 24px 0px 0px"
                      >
                        <Box
                          width="12px"
                          height="12px"
                          bgcolor={item.color}
                          borderRadius="100%"
                          margin="0px 8px 0px 0px"
                        ></Box>
                        <Typography variant="h5" fontSize="16px">
                          {item.label}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </TabPanelComponent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card
            style={{
              margin: "0px 8px",
              borderRadius: "12px",
              height: "500px",
            }}
          >
            <Box
              sx={{ borderBottom: 1, borderColor: "divider" }}
              padding="0px 12px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              style={{ border: "none" }}
            >
              <Typography>Blister Pack</Typography>
              <Tabs
                value={blisterPackvalue}
                onChange={handleChangeBlisterPackvalue}
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
                <Tab label="Last Week" />
                <Tab label="Last Month" />
                <Tab label="Custom" />
              </Tabs>
            </Box>
            <TabPanelComponent value={blisterPackvalue} index={0}>
              <ChartCard />
            </TabPanelComponent>
            <TabPanelComponent value={blisterPackvalue} index={1}>
              <ChartCard />
            </TabPanelComponent>
            <TabPanelComponent value={blisterPackvalue} index={2}>
              <ChartCard />
            </TabPanelComponent>
          </Card>
        </Grid>
      </Grid>
      <ActivityCard />
    </Box>
  );
}

export default Dashboard;
