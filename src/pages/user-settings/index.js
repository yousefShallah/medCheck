import React from "react";
import UserSettingsCard from "../../components/user-settings-card";
import { Box } from "@mui/material";
import Navbar from "../../components/navbar";

function UsefSettings() {
  return (
    <Box>
      <Navbar navTitle={[{ url: "/user/settings", text: "Settings" }]} />
      <UserSettingsCard />
    </Box>
  );
}

export default UsefSettings;
