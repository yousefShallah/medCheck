import React from "react";
import "./index.scss";
import { Box, Link, Typography } from "@mui/material";

function MenuItem({ item }) {
  return (
    <Box>
      <Link
        style={{
          textDecoration: "none",
          color: "#000000DE",
          cursor: "pointer",
        }}
      >
        <Box
          className="item-card"
          margin="16px 0px"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <img
            src={
              item.img
                ? item?.img
                : "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            }
            alt="img"
            width="48px"
            height="48px"
            style={{ borderRadius: "2px", objectFit: "cover" }}
          />
          <Typography variant="h4" fontSize="16px" marginLeft="16px">
            {item.text}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

export default MenuItem;
