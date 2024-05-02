import React from "react";
import { Box } from "@mui/material";
import Dashboard from "./dashboard";
import "./index.scss";
import Navbar from "../../../components/navbar";

function AdminHome() {
  return (
    <Box bgcolor="#f5f5f5">
      <Navbar
        navTitle={[{ url: "/admin/1", text: "Dashboard" }]}
        user="admin"
      />
      <Dashboard />
    </Box>
  );
}

export default AdminHome;
