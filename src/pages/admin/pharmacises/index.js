import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar";
import PharmacisesList from "./Pharmacises";
import PharmacisesProfile from "./pharmacises-profile";
import PharmacisesBlisterPacks from "./sharedComponents/pharmacisesBlisterpacks";

const Pharmacises = () => {
  const [navLinks, setNavLinks] = useState([]);
  let { activePage, activeRoute } = useParams();
  console.log("activePage", activePage);
  console.log("activeRoute", activeRoute);

  useEffect(() => {
    if (activeRoute === "list" || !activeRoute) {
      setNavLinks([{ url: "/admin/4/list", text: "Pharmacises List" }]);
    } else if (activeRoute === "pharmacises-profile") {
      setNavLinks([
        { url: "/admin/4/list", text: "Pharmacises List" },
        { url: "/admin/4/pharmacises-profile", text: "Pharmacises Profile" },
      ]);
    } else if (activeRoute === "blisterpacks") {
      setNavLinks([
        { url: "/admin/4/list", text: "Pharmacises List" },
        { url: "/admin/4/pharmacises-profile", text: "Pharmacises Profile" },
        { url: "/admin/4/blisterpacks", text: "Blister Packs" },
      ]);
    }
  }, [activeRoute]);

  return activePage === "4" ? (
    <Box>
      <Navbar navTitle={[...navLinks]} user="admin" />
      {!activeRoute || activeRoute === "list" ? (
        <PharmacisesList />
      ) : activeRoute === "pharmacises-profile" ? (
        <PharmacisesProfile />
      ) : (
        activeRoute === "blisterpacks" && <PharmacisesBlisterPacks />
      )}
    </Box>
  ) : (
    <Typography>
      Active Page activePage but this active page for this page is 4
      (Pharmacises)
    </Typography>
  );
};

export default Pharmacises;
