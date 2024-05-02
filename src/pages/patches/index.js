import React, { useEffect, useState } from "react";
import DynamicTabel from "../../components/dynamic-tabel";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanelComponent from "../../components/TabPanel";
import {
  complatedColumns,
  complatedRows,
  newPatchsColumns,
  newPatchsRows,
  revisedColumns,
  revisedRows,
} from "./tabelsData";
import BarcodeButton from "../../components/barcodeButton";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";

function Patches() {
  const [value, setValue] = useState(0);
  const [navTitleValue, setNavTitleValue] = useState(["Patches"]);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let navValue = [];
    if (value === 0) {
      navValue = [{ url: "/Patches", text: "Patches" }];
    } else if (value === 1) {
      navValue = [{ url: "/Patches", text: "Patches" }, "Revised"];
    } else if (value === 2) {
      navValue = [{ url: "/Patches", text: "Patches" }, "Complated"];
    } else {
      navValue = [{ url: "/Patches", text: "Patches" }];
    }
    setNavTitleValue(navValue);
  }, [value]);

  const rowClickCallback = (data) => {
    console.log("datadatadata", data);
    navigate(`/${data.id}/users`);
  };

  return (
    <Box>
      <Navbar navTitle={navTitleValue} />
      <Box padding="16px 24px" bgcolor="#F5F5F5" height="auto">
        <Box
          bgcolor="#fff"
          borderRadius="8px"
          border="1px solid #ddd"
          padding="8px 0px 0px"
          height="88.5vh"
        >
          <Box height="94%">
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
                <Tab label="New Patches" />
                <Tab label="Revised" />
                <Tab label="Completed" />
              </Tabs>
              {value === 1 && (
                <BarcodeButton
                  text="Scan barcode"
                  background="#1D617A"
                  color="#ffffff"
                />
              )}
            </Box>
            <TabPanelComponent value={value} index={0}>
              <DynamicTabel
                rows={newPatchsRows}
                columns={newPatchsColumns}
                paginationSize={[10, 20, 30]}
                rowClickCallback={(data) => rowClickCallback(data)}
              />
            </TabPanelComponent>
            <TabPanelComponent value={value} index={1}>
              <DynamicTabel
                rows={revisedRows || []}
                columns={revisedColumns || []}
                paginationSize={[10, 20, 30]}
              />
            </TabPanelComponent>
            <TabPanelComponent value={value} index={2}>
              <DynamicTabel
                rows={complatedRows || []}
                columns={complatedColumns || []}
                paginationSize={[10, 20, 30]}
              />
            </TabPanelComponent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Patches;
