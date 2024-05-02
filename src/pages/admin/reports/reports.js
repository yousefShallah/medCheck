import React from "react";
import { Box, Card, TextField, Typography } from "@mui/material";
import { reportsColumns, reportsRows } from "./data";
import DynamicTabel from "../../../components/dynamic-tabel/index";
import { useNavigate } from "react-router-dom";

function ReportsList() {
  const navigate = useNavigate();
  const rowClickCallback = (data) => {
    navigate(`/admin/6/selected-report`);
  };
  return (
    <Box>
      <Card
        style={{
          margin: "24px",
          borderRadius: "16px",
          padding: "16px 0px",
          height: "83vh",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="0px 16px 0px"
        >
          <Typography
            variant="span"
            fontSize="24px"
            fontWeight="600"
            margin="0px"
          >
            Reports
          </Typography>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <TextField
              id="outlined-basic"
              label="Search..."
              variant="outlined"
              className="search-input"
              size="small"
            />
          </Box>
        </Box>
        <Box height="96%">
          <DynamicTabel
            rows={reportsRows}
            columns={reportsColumns}
            paginationSize={[10, 20, 30]}
            rowClickCallback={(data) => rowClickCallback(data)}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default ReportsList;
