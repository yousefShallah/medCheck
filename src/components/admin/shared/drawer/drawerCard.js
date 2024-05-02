import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Typography } from "@mui/material";
import AddNewPatient from "./AddNewPatient";
import AddNewAssistant from "./AddNewAssistant";
import TabelFilter from "./assistantTabelFilter";
import AssistantLogFilter from "./assistantLogFilter";
import AddNewPharmacise from "./AddNewPharmacise";
import PatientsTabelFilter from "./patientsTabelFilter";

function DrawerCard({ action, setDrawerAction, data, width }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [action]);

  const handelCloseDrawer = () => {
    setDrawerAction("");
    setOpen(false);
  };

  return (
    <Drawer open={open} onClose={handelCloseDrawer} anchor="right">
      <Box width={width ? width : "835px"} position="relative" height="100%">
        {action === "AddNewPatient" ? (
          <AddNewPatient
            data={data}
            handelCloseDrawer={() => handelCloseDrawer()}
          />
        ) : action === "AddNewAssistant" || action === "EditAssistant" ? (
          <AddNewAssistant
            data={data}
            action={action}
            handelCloseDrawer={() => handelCloseDrawer()}
          />
        ) : action === "TabelFilter" ? (
          <TabelFilter
            action={action}
            handelCloseDrawer={() => handelCloseDrawer()}
          />
        ) : action === "LogFilter" ? (
          <AssistantLogFilter
            action={action}
            handelCloseDrawer={() => handelCloseDrawer()}
          />
        ) : action === "AddNewPharmacise" || action === "EditPharmacise" ? (
          <AddNewPharmacise
            data={data}
            action={action}
            handelCloseDrawer={() => handelCloseDrawer()}
          />
        ) : action === "PatientsTabelFilter" ? (
          <PatientsTabelFilter
            action={action}
            handelCloseDrawer={() => handelCloseDrawer()}
          />
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Typography variant="h6"> Action is InValid </Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}

export default DrawerCard;
