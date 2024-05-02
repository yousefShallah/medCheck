import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar";
import AssistantList from "./assistant";
import AssistantProfile from "./assistant-profile";
import AssistantBlisterPacks from "./sharedComponents/assistantBlisterpacks";

const Assistants = () => {
  const [navLinks, setNavLinks] = useState([]);
  let { activePage, activeRoute } = useParams();
  console.log("activePage", activePage);
  console.log("activeRoute", activeRoute);

  useEffect(() => {
    if (activeRoute === "list" || !activeRoute) {
      setNavLinks([{ url: "/admin/3/list", text: "Assistants List" }]);
    } else if (activeRoute === "assistant-profile") {
      setNavLinks([
        { url: "/admin/3/list", text: "Assistant List" },
        { url: "/admin/3/assistant-profile", text: "Assistant Profile" },
      ]);
    } else if (activeRoute === "blisterpacks") {
      setNavLinks([
        { url: "/admin/3/list", text: "Assistant List" },
        { url: "/admin/3/assistant-profile", text: "Assistant Profile" },
        { url: "/admin/3/blisterpacks", text: "Assistant Blister Packs" },
      ]);
    }
  }, [activeRoute]);

  return activePage === "3" ? (
    <Box>
      <Navbar navTitle={[...navLinks]} user="admin" />
      {!activeRoute || activeRoute === "list" ? (
        <AssistantList />
      ) : activeRoute === "assistant-profile" ? (
        <AssistantProfile />
      ) : (
        activeRoute === "blisterpacks" && <AssistantBlisterPacks />
      )}
    </Box>
  ) : (
    <Typography>
      Active Page activePage but this active page for this page is 3
      (ASSISTANTS)
    </Typography>
  );
};

export default Assistants;
