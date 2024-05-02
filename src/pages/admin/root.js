import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Content from "../../components/admin/content";

function Root() {
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
    let timeout;
    if (
      window.location.href.split("/").filter((item) => item)[2] === "admin" &&
      window.location.href.split("/").filter((item) => item)[3] !== 1
    ) {
      timeout = setTimeout(() => {
        setActivePage(
          parseInt(window.location.href.split("/").filter((item) => item)[3])
        );
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setActivePage(1);
      }, 100);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Box bgcolor="#F5F5F5">
      <Content
        activePage={activePage}
        setActivePage={(status) => setActivePage(status)}
      />
    </Box>
  );
}

export default Root;
