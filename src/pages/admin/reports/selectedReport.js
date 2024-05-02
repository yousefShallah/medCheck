import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import SelecteReportTabel from "./selected-report-tabel";

function SelectedReport() {
  return (
    <Box>
      <Card
        style={{
          margin: "24px",
          borderRadius: "16px",
          padding: "20px .5px",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="8px 20px 24px"
        >
          <Typography
            variant="h6"
            fontSize="24px"
            fontWeight="600"
            color="#000000DE"
          >
            Pack Prep Report
          </Typography>
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
        <Box padding="8px 20px">
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Typography
              variant="h6"
              fontSize="16px"
              fontWeight="400"
              color="#00000099"
            >
              Patient Name:
            </Typography>
            <Typography
              variant="h6"
              fontSize="16px"
              fontWeight="400"
              color="#000000"
              marginLeft="8px"
            >
              Patient Name
            </Typography>
          </Box>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Typography
              variant="h6"
              fontSize="16px"
              fontWeight="400"
              color="#00000099"
            >
              Patient PHN:
            </Typography>
            <Typography
              variant="h6"
              fontSize="16px"
              fontWeight="400"
              color="#000000"
              marginLeft="8px"
            >
              56065947
            </Typography>
          </Box>
        </Box>
        <Box padding="16px 0px">
          <SelecteReportTabel />
        </Box>
      </Card>
    </Box>
  );
}

export default SelectedReport;
