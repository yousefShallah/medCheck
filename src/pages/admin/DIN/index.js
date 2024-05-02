import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Navbar from "../../../components/navbar";
import { reportsRows } from "./data";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGridPro } from "@mui/x-data-grid-pro";

function DIN() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [tabelsRows, setTabelsRows] = useState(reportsRows);

  const handleRowClick = (params) => {
    setSelectedRow(selectedRow ? [...selectedRow, params.id] : [params.id]);
  };

  const handelFilter = (action, value) => {
    const filteredRows = reportsRows.filter((obj) => {
      return Object.keys(obj).some((key) => {
        return (
          obj[key]?.toString()?.toLowerCase()?.indexOf(value.toLowerCase()) !==
          -1
        );
      });
    });
    setTabelsRows(filteredRows);
  };
  const reportsColumns = [
    {
      field: "MedicineName",
      headerName: "Medicine Name",
      width: 500,
      renderCell: (params) => {
        return (
          <Box width="100%">
            {params.value !== null ? (
              <Typography> {params.value} </Typography>
            ) : (
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                inputProps={{
                  style: {
                    height: "30px",
                    padding: "5px",
                    background: "#f5f5f5",
                    borderRadius: "8px",
                  },
                }}
                onChange={(event) =>
                  handelFilter("MedicineName", event.target.value)
                }
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "8px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#f5f5f5",
                    },
                  },
                }}
              />
            )}
          </Box>
        );
      },
    },
    {
      field: "DIN",
      headerName: "DIN",
      width: 450,
      renderCell: (params) => {
        return (
          <Box width="100%">
            {params.value !== null ? (
              <Typography> {params.value} </Typography>
            ) : (
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                inputProps={{
                  style: {
                    height: "30px",
                    padding: "5px",
                    background: "#f5f5f5",
                    borderRadius: "8px",
                  },
                }}
                onChange={(event) => handelFilter("DIN", event.target.value)}
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "8px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#f5f5f5",
                    },
                  },
                }}
              />
            )}
          </Box>
        );
      },
    },
    {
      field: "UPC",
      headerName: "UPC",
      width: 450,
      renderCell: (params) => {
        return (
          <Box width="100%">
            {params.value !== null ? (
              <Typography> {params.value} </Typography>
            ) : (
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                inputProps={{
                  style: {
                    height: "30px",
                    padding: "5px",
                    background: "#f5f5f5",
                    borderRadius: "8px",
                  },
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "8px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#f5f5f5",
                    },
                  },
                }}
                onChange={(event) => handelFilter("UPC", event.target.value)}
              />
            )}
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "",
      width: 70,
      renderCell: (params) => {
        return (
          params.value !== "search" && (
            <Box
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleRowClick(params)}
            >
              <DeleteIcon style={{ fontSize: "24px", color: "#D32F2F" }} />
            </Box>
          )
        );
      },
    },
  ];
  // pinned search object
  const pinnedRows = {
    top: [
      {
        id: 0,
        MedicineName: null,
        DIN: null,
        UPC: null,
        action: "search",
      },
    ],
  };
  return (
    <Box>
      <Navbar
        navTitle={[{ url: "/admin/7/list", text: "DIN List" }]}
        user="admin"
      />
      <Card
        style={{
          margin: "24px",
          borderRadius: "16px",
          padding: "4px 0px",
          height: "85vh",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="0px 16px 0px"
        >
          <Typography
            variant="span"
            fontSize="24px"
            fontWeight="600"
            margin="0px"
          >
            DIN List
          </Typography>
          {!selectedRow ? (
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              padding="16px"
            >
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="outlined"
                  component="span"
                  style={{
                    borderColor: "#1D617A",
                    color: "#1D617A",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Import
                  <UploadFileIcon
                    style={{ fontSize: "20px", marginLeft: "8px" }}
                  />
                </Button>
              </label>
              <Button
                variant="contained"
                style={{
                  borderColor: "#1D617A",
                  background: "#1D617A",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginLeft: "8px",
                }}
              >
                Add new
                <AddIcon style={{ fontSize: "20px", marginLeft: "8px" }} />
              </Button>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              padding="16px"
            >
              <Button
                variant="contained"
                style={{
                  borderColor: "#D32F2F",
                  background: "#D32F2F",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Delete All
                <DeleteIcon
                  style={{
                    fontSize: "20px",
                    marginLeft: "8px",
                    fill: "#ffffff",
                  }}
                />
              </Button>
              <Button
                variant="outlined"
                style={{
                  borderColor: "#1D617A",
                  color: "#1D617A",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginLeft: "8px",
                }}
                onClick={() => setSelectedRow(null)}
              >
                Deselect All
              </Button>
            </Box>
          )}
        </Box>
        <Box height="92%">
          <DataGridPro
            rows={tabelsRows}
            columns={reportsColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 11 },
              },
            }}
            pageSizeOptions={[11, 22, 33]}
            checkboxSelection={true}
            disableRowSelectionOnClick={true}
            onRowSelectionModelChange={(newRowSelectionModel) =>
              setSelectedRow(
                newRowSelectionModel?.length ? newRowSelectionModel : null
              )
            }
            pagination
            pinnedRows={pinnedRows}
            rowSelectionModel={selectedRow ? selectedRow : []}
            sx={{
              border: 0,
              "& .MuiDataGrid-cell": {
                color: "#000000DE",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                color: "#00000061",
                fontSize: "14px",
              },
              "& .MuiDataGrid-row": {
                height: "72px",
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
                padding: "0px 4px",
              },
              "& .MuiDataGrid-columnHeadersInner": {
                height: "56px",
              },
              "& .MuiDataGrid-columnHeaderDraggableContainer": {
                alignItems: "center",
              },
              "& .MuiDataGrid-cellContent": {
                fontSize: "16px",
                padding: "0px 4px",
              },
              "& .MuiDataGrid-pinnedRows": {
                boxShadow: "none",
              },
            }}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default DIN;
