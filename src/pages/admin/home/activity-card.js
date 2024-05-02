import React, { useState } from "react";
import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import TabPanelComponent from "../../../components/TabPanel";
import ActivityTabel from "./activity-tabel";

function ActivityCard() {
  const [blisterPackvalue, setBlisterPackvalue] = useState(0);

  const handleChangeBlisterPackvalue = (event, newValue) => {
    setBlisterPackvalue(newValue);
  };
  return (
    <Card
      style={{
        margin: "16px 8px",
        borderRadius: "12px",
        height: "800px",
      }}
    >
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        padding="8px 12px 0px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{ border: "none" }}
      >
        <Typography>Productivity</Typography>
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
          <Tab label="This Week" />
          <Tab label="Last Week" />
          <Tab label="Last Month" />
        </Tabs>
      </Box>
      <TabPanelComponent value={blisterPackvalue} index={0}>
        <ActivityTabel />
      </TabPanelComponent>
      <TabPanelComponent value={blisterPackvalue} index={1}>
        <ActivityTabel />
      </TabPanelComponent>
      <TabPanelComponent value={blisterPackvalue} index={2}>
        <ActivityTabel />
      </TabPanelComponent>
    </Card>
  );
}

export default ActivityCard;
