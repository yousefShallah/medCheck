import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import PatientsList from "./patients";
import { useParams } from "react-router-dom";
import PatientsProfile from "./patients-profile";
import PatientBlisterPacks from "./patientBlisterPacks";
import Navbar from "../../../components/navbar";

const Patients = () => {
  const [navLinks, setNavLinks] = useState([]);
  let { activePage, activeRoute } = useParams();
  console.log("activePage", activePage);
  console.log("activeRoute", activeRoute);
  useEffect(() => {
    if (activeRoute === "list" || !activeRoute) {
      setNavLinks([{ url: "/admin/2/list", text: "Patient List" }]);
    } else if (activeRoute === "patient-profile") {
      setNavLinks([
        { url: "/admin/2/list", text: "Patient List" },
        { url: "/admin/2/patient-profile", text: "Patient Profile" },
      ]);
    } else if (activeRoute === "blisterpacks") {
      setNavLinks([
        { url: "/admin/2/list", text: "Patient List" },
        { url: "/admin/2/patient-profile", text: "Patient Profile" },
        { url: "/admin/2/blisterpacks", text: "Patient Blister Packs" },
      ]);
    }
  }, [activeRoute]);

  return activePage === "2" ? (
    <Box>
      <Navbar navTitle={[...navLinks]} user="admin" />
      {!activeRoute || activeRoute === "list" ? (
        <PatientsList />
      ) : activeRoute === "patient-profile" ? (
        <PatientsProfile />
      ) : (
        activeRoute === "blisterpacks" && <PatientBlisterPacks />
      )}
    </Box>
  ) : (
    <Typography>
      Active Page activePage but this active page for this page is 2
    </Typography>
  );
};

export default Patients;
