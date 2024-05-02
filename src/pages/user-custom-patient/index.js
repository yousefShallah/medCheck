import React from "react";
import FinalView from "../../components/finalView";
import Navbar from "../../components/navbar";
import { Box } from "@mui/material";

function UserCustomPatient() {
  return (
    <Box bgcolor="#f5f5f5" height="100vh">
      <Navbar
        navTitle={[
          { url: "/Patches", text: "Patches" },
          { url: "/Patches", text: "Revised" },
          { url: "/Patches", text: "Patient" },
        ]}
      />
      <FinalView />
    </Box>
  );
}

export default UserCustomPatient;
