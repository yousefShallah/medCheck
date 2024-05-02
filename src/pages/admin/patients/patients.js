import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { patcheUsersColumns, patcheUsersRows } from "./data";
import AddIcon from "@mui/icons-material/Add";
import DynamicTabel from "../../../components/dynamic-tabel/index";
import { useNavigate } from "react-router-dom";
import DrawerCard from "../../../components/admin/shared/drawer/drawerCard";

function PatientsList() {
  const [drawerAction, setDrawerAction] = useState("");
  const navigate = useNavigate();

  const rowClickCallback = (data) => {
    navigate(`/admin/2/patient-profile`);
  };

  return (
    <Card
      style={{
        margin: "24px",
        borderRadius: "16px",
        padding: "16px 0px",
        height: "83vh",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0px 16px 16px"
      >
        <Typography
          variant="span"
          fontSize="24px"
          fontWeight="600"
          margin="0px"
        >
          Patients List
        </Typography>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <TextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            className="search-input"
            size="small"
          />
          <Button
            variant="contained"
            style={{
              height: "45px",
              margin: "0px 0px 0px 16px",
              background: "#1D617A",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
            }}
            onClick={() => setDrawerAction("AddNewPatient")}
          >
            Add New Patient{" "}
            <AddIcon
              style={{
                fontSize: "20px",
                marginLeft: "8px",
              }}
            />
          </Button>
        </Box>
      </Box>
      <Box height="95%">
        <DynamicTabel
          rows={patcheUsersRows}
          columns={patcheUsersColumns}
          paginationSize={[10, 20, 30]}
          rowClickCallback={(data) => rowClickCallback(data)}
        />
      </Box>
      {drawerAction && (
        <DrawerCard
          action={drawerAction}
          setDrawerAction={(action) => setDrawerAction(action)}
        />
      )}
    </Card>
  );
}

export default PatientsList;
