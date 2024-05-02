import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./index.scss";

function DynamicTabel({
  rows,
  columns,
  paginationSize,
  rowClickCallback,
  customStyle,
  // checkBoxSelection,
  // onRowSelectionModelChange,
  // selectedRow,
}) {
  const handleRowClick = (params) => {
    console.log("paramsparams", params);
    if (rowClickCallback) {
      rowClickCallback(params.row);
    }
  };
  return (
    <Box className="tabel-container-box">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={paginationSize}
        // checkboxSelection={checkBoxSelection ? checkBoxSelection : false}
        // disableRowSelectionOnClick={
        //   checkBoxSelection ? checkBoxSelection : false
        // }
        // onRowSelectionModelChange={(newRowSelectionModel) =>
        //   onRowSelectionModelChange(newRowSelectionModel)
        // }
        // rowSelectionModel={selectedRow}
        onRowClick={handleRowClick}
        // slots={{
        //   toolbar: GridToolbar,
        // }}
        sx={
          customStyle
            ? customStyle
            : {
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
              }
        }
      />
    </Box>
  );
}

export default DynamicTabel;
