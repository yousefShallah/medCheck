import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import SelectedReport from "./selectedReport";
import ReportsList from "./reports";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar";

function Reports() {
  const [navLinks, setNavLinks] = useState([]);
  let { activePage, activeRoute } = useParams();

  useEffect(() => {
    if (activeRoute === "list" || !activeRoute) {
      setNavLinks([{ url: "/admin/6/list", text: "Reports List" }]);
    } else if (activeRoute === "selected-report") {
      setNavLinks([
        { url: "/admin/6/list", text: "Reports List" },
        { url: "/admin/6/selected-report", text: "Selected Report" },
      ]);
    }
  }, [activeRoute]);
  return activePage === "6" ? (
    <Box>
      <Navbar navTitle={[...navLinks]} user="admin" />
      {!activeRoute || activeRoute === "list" ? (
        <ReportsList />
      ) : (
        activeRoute === "selected-report" && <SelectedReport />
      )}
    </Box>
  ) : (
    <Typography>
      Active Page activePage but this active page for this page is 6
    </Typography>
  );
}

export default Reports;
