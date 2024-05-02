import { Box } from "@mui/material";
import React from "react";
import DynamicTabel from "../../components/dynamic-tabel";
import { patcheUsersColumns, patcheUsersRows } from "./tabelData";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";

function PatcheUsers() {
  const navigate = useNavigate();

  const rowClickCallback = (data) => {
    navigate(`/patient/${data.id}`);
  };

  return (
    <Box>
      <Navbar
        navTitle={[
          { url: "/Patches", text: "Patches" },
          { url: "/Patches", text: "Patient List" },
        ]}
      />
      <Box bgcolor="#F5F5F5" height="87vh" padding="16px 24px">
        <Box
          width="100%"
          height="100%"
          bgcolor="#fff"
          borderRadius="10px"
          border="1px solid #ddd"
        >
          <DynamicTabel
            rows={patcheUsersRows}
            columns={patcheUsersColumns}
            paginationSize={[10, 20, 30]}
            rowClickCallback={(data) => rowClickCallback(data)}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default PatcheUsers;
