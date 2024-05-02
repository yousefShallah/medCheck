import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import DynamicTabel from "../../components/dynamic-tabel";
import { patcheUsersRows } from "./tabelData";
import { useNavigate } from "react-router-dom";
import QRCode from "../../images/Barcode.png";
import UserPatientCard from "../../components/user-patient-card";
import Navbar from "../../components/navbar";

function UserPatient() {
  const [open, setOpen] = React.useState(false);
  const [openImg, setOpenImg] = React.useState(false);
  const [enterDINNumberInput, setEnterDINNumberInput] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [selectedRowImg, setSelectedRowImg] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDialogImg = () => {
    setOpenImg(false);
  };
  const rowClickCallback = (data) => {
    console.log("datadatadata", data);
    if (selectedRow && selectedRow.img) {
      setSelectedRow({ ...selectedRow, ...data });
    } else {
      setSelectedRow(data);
    }
  };

  const handelClickQRCode = () => {
    if (selectedRow) {
      navigate(`/patient/${selectedRow.id}/custom`);
    }
  };

  const renderPatientDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            maxWidth: "790px",
          },
        }}
      >
        <DialogContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className="text-box">
              <Typography variant="h6"> Scan Barcode </Typography>
              <ul>
                <li style={{ fontSize: "16px", marginTop: "1rem" }}>
                  Direct the package toward the machine to read the code
                </li>
                <li style={{ fontSize: "16px", marginTop: "1rem" }}>
                  If there are any issues with the code, enter the DIN number.
                </li>
              </ul>
              <Box>
                <Button
                  onClick={() => setEnterDINNumberInput(!enterDINNumberInput)}
                  style={{ color: "#1D617A" }}
                >
                  Enter din number
                </Button>
                {enterDINNumberInput && (
                  <TextField
                    id="standard-basic"
                    label="DIN Number"
                    variant="standard"
                  />
                )}
              </Box>
            </Box>
            <Divider
              orientation="vertical"
              style={{ height: "250px", padding: "0px 8px", marginTop: "16px" }}
            />
            <Box className="qr-code-box">
              <Button onClick={() => handelClickQRCode()}>
                <img src={QRCode} alt="img" style={{ width: "350px" }} />
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              color: "#1D617A",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const renderPatientImgDialog = () => {
    return (
      <Dialog
        open={openImg}
        onClose={handleCloseDialogImg}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            maxWidth: "1630px",
            width: "520px",
            height: "480px",
          },
        }}
      >
        <DialogContent>
          <Box className="qr-code-img-box">
            <h3> Medicine Image </h3>
            <img
              src={selectedRowImg || QRCode}
              alt="img"
              style={{ width: "470px", height: "300px", objectFit: "cover" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialogImg}
            style={{
              color: "#1D617A",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  const handelOpenImage = (img) => {
    setOpenImg(true);
    setSelectedRowImg(img);
  };

  const patcheUsersColumns = [
    {
      field: "Medicine",
      headerName: "Medicine",
      width: 300,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "0px 10px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
            style={{
              width: "48px",
              height: "48px",
              marginRight: "10px",
              borderRadius: "2px",
            }}
            onClick={() =>
              handelOpenImage(
                "https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              )
            }
            alt="img"
          />
          <Typography
            variant="span"
            onClick={() => setOpen(true)}
            style={{ whiteSpace: "pre-wrap" }}
            fontSize="16px"
          >
            {params.value}
          </Typography>
        </div>
      ),
    },
    {
      field: "Direction",
      headerName: "Direction",
      width: 300,
      renderCell: (params) => (
        <Typography
          style={{
            width: "300px",
            whiteSpace: "pre-wrap",
          }}
          fontSize="16px"
          padding="0px 10px"
        >
          {params?.value}
        </Typography>
      ),
    },
    {
      field: "DIN",
      headerName: "DIN",
      width: 180,
      renderCell: (params) => (
        <Box padding="0px 10px">
          <Typography>{params?.value?.value}</Typography>
          <Typography style={{ color: "#B71C1C" }}>
            {params?.value?.uniqe}
          </Typography>
        </Box>
      ),
    },
    {
      field: "UPC",
      headerName: "UPC",
      width: 180,
      renderCell: (params) => (
        <Box padding="0px 10px">
          <Typography>{params?.value?.value}</Typography>
          <Typography style={{ color: "#B71C1C" }}>
            {params?.value?.uniqe}
          </Typography>
        </Box>
      ),
    },
    { field: "Prescriber", headerName: "Prescriber", width: 200 },
    { field: "Ref", headerName: "Ref", width: 80 },
    { field: "Rx", headerName: "Rx#", width: 100 },

    {
      field: "Breakfast",
      headerName: "Breakfast",
      width: 100,
      renderCell: (params) => (
        <Box
          bgcolor={params.value ? "#E8F5E9" : "#FAFAFA"}
          width="100%"
          height="50px"
          color="#00000099"
          fontSize="16px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="2px"
        >
          <Typography>{params?.value || "--"}</Typography>
        </Box>
      ),
    },
    {
      field: "Lunch",
      headerName: "Lunch",
      width: 100,
      renderCell: (params) => (
        <Box
          bgcolor={params.value ? "#E8F5E9" : "#FAFAFA"}
          width="115px"
          height="50px"
          color="#00000099"
          fontSize="16px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="2px"
        >
          <Typography>{params?.value || "--"}</Typography>
        </Box>
      ),
    },
    {
      field: "Dinner",
      headerName: "Dinner",
      width: 100,
      renderCell: (params) => (
        <Box
          bgcolor={params.value ? "#E8F5E9" : "#FAFAFA"}
          width="150px"
          height="50px"
          color="#00000099"
          fontSize="16px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="2px"
        >
          <Typography>{params?.value || "--"}</Typography>
        </Box>
      ),
    },
    {
      field: "Bedtime",
      headerName: "Bedtime",
      width: 100,
      renderCell: (params) => (
        <Box
          bgcolor={params.value ? "#E8F5E9" : "#FAFAFA"}
          width="115px"
          height="50px"
          color="#00000099"
          fontSize="16px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="2px"
        >
          <Typography>{params?.value || "--"}</Typography>
        </Box>
      ),
    },
    {
      field: "Total",
      headerName: "Total",
      width: 100,
      renderCell: (params) => (
        <Box
          width="115px"
          height="50px"
          color="#000000"
          fontSize="16px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="2px"
        >
          <Typography>{params?.value || "--"}</Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Navbar
        navTitle={[
          { url: "/Patches", text: "Patches" },
          { url: "/Patches", text: "Revised" },
          { url: "/Patches", text: "Patient" },
        ]}
      />
      <Box bgcolor="#F5F5F5" height="89.5vh" padding="16px 24px">
        <UserPatientCard />
        <Card style={{ height: "87%", borderRadius: "16px", width: "auto" }}>
          <Box width="100%" height="100%">
            <DynamicTabel
              rows={patcheUsersRows}
              columns={patcheUsersColumns}
              paginationSize={[10, 20, 30]}
              rowClickCallback={(data) => rowClickCallback(data)}
              customStyle={{
                border: 0,
                "& .MuiDataGrid-cell": {
                  color: "#000000DE",
                  padding: "0px !important",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  color: "#00000061",
                  fontSize: "14px",
                },
                "& .MuiDataGrid-row": {
                  height: "92px",
                },
                "& .MuiDataGrid-columnHeaderTitleContainer": {
                  height: "24px",
                },
                "& .MuiDataGrid-columnHeader": {
                  display: "flex",
                  alignItems: "center",
                  height: "56px",
                },
                "& .MuiDataGrid-columnHeaders": {
                  minHeight: "30px",
                  padding: "16px 8px",
                },
                "& .MuiDataGrid-columnHeadersInner": {
                  height: "56px",
                },
                "& .MuiDataGrid-columnHeaderDraggableContainer": {
                  alignItems: "center",
                },
                "& .MuiDataGrid-cellContent": {
                  fontSize: "16px",
                  padding: "0px 8px",
                },
              }}
            />
          </Box>
        </Card>
      </Box>
      {renderPatientDialog()}
      {renderPatientImgDialog()}
    </Box>
  );
}

export default UserPatient;
