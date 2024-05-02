import React from "react";
import { Box } from "@mui/material";
import DynamicTabel from "../../../components/dynamic-tabel";
import { userProfileColumns, userProfileRows } from "./data";
import { useNavigate } from "react-router-dom";

function AssistantTabel() {
  const navigate = useNavigate();
  const rowClickCallback = (data) => {
    navigate(`/admin/3/blisterpacks`);
  };
  return (
    <Box height="89vh">
      <DynamicTabel
        rows={userProfileRows}
        columns={userProfileColumns}
        paginationSize={[10, 20, 30]}
        rowClickCallback={(data) => rowClickCallback(data)}
      />
    </Box>
  );
}

export default AssistantTabel;
