import React from "react";
import Navbar from "../../../components/navbar";
import { Box } from "@mui/material";
import AdminSettingsCard from "./adminSettingsCard";

function Settings() {
  return (
    <Box>
      <Navbar
        navTitle={[
          { url: "/admin/5", text: "Admin" },
          { url: "/admin/5", text: "Settings" },
        ]}
        user="admin"
      />
      <AdminSettingsCard />
    </Box>
  );
}

export default Settings;
