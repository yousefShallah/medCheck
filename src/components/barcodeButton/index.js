import React from "react";
import { Button } from "@mui/material";
import QrCode2Icon from "@mui/icons-material/QrCode2";

function BarcodeButton({ text, background, color }) {
  return (
    <Button
      variant="contained"
      endIcon={<QrCode2Icon />}
      className="barcode-button"
      style={{
        background: background,
        color: color,
        height: "40px",
        width: "195px",
        fontSize: "15px",
        marginTop: "4px",
      }}
    >
      {text}
    </Button>
  );
}

export default BarcodeButton;
