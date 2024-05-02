import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import DynamicTabel from "../../../components/dynamic-tabel";
import TabPanelComponent from "../../../components/TabPanel";
import {
  assistantColumns,
  assistantRows,
  pharmacistColumns,
  pharmacistRows,
} from "./data";
import { useNavigate } from "react-router-dom";

function ActivityTabel() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const rowClickCallback = (data) => {
    console.log("datadatadata", data);
    navigate(`/${data.id}/users`);
  };

  return (
    <Box height="86.6%">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        padding="0px 8px 0px 8px"
        display="flex"
        justifyContent="space-between"
        style={{ border: "none" }}
      >
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
          <Tab label="Assistant" />
          <Tab label="Pharmacist" />
        </Tabs>
      </Box>
      <TabPanelComponent value={value} index={0}>
        <DynamicTabel
          rows={assistantRows}
          columns={assistantColumns}
          paginationSize={[10, 20, 30]}
          rowClickCallback={(data) => rowClickCallback(data)}
        />
      </TabPanelComponent>
      <TabPanelComponent value={value} index={1}>
        <DynamicTabel
          rows={pharmacistRows || []}
          columns={pharmacistColumns || []}
          paginationSize={[10, 20, 30]}
        />
      </TabPanelComponent>
    </Box>
  );
}

export default ActivityTabel;
