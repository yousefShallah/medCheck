import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "#", width: 50 },
  {
    field: "StartDate",
    headerName: "Start Date",
    width: 360,
    renderCell: (params) => {
      return (
        <Typography
          width="100%"
          height="30px"
          borderRadius="8px"
          bgcolor={params?.value ? "" : "#F5F5F5"}
        >
          {params?.value}
        </Typography>
      );
    },
  },
  {
    field: "EndDate",
    headerName: "End Date",
    width: 360,
    renderCell: (params) => {
      return (
        <Typography
          width="100%"
          height="30px"
          borderRadius="8px"
          bgcolor={params?.value ? "" : "#F5F5F5"}
        >
          {params?.value}
        </Typography>
      );
    },
  },
  {
    field: "Preparedby",
    headerName: "Prepared by",
    width: 360,
    renderCell: (params) => {
      return (
        <Typography
          width="100%"
          height="30px"
          borderRadius="8px"
          bgcolor={params && params.value ? "" : "#F5F5F5"}
        >
          {params?.value}
        </Typography>
      );
    },
  },
  {
    field: "PharmacistCheck",
    headerName: "Pharmacist Check",
    width: 367,
    renderCell: (params) => {
      return (
        <Typography
          width="100%"
          height="30px"
          borderRadius="8px"
          bgcolor={params?.value ? "" : "#F5F5F5"}
        >
          {params?.value}
        </Typography>
      );
    },
  },
];

const rows = [
  {
    id: "",
    StartDate: "",
    EndDate: "",
    Preparedby: "",
    PharmacistCheck: "",
  },
  {
    id: 1,
    StartDate: "8 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Arlene McCoy",
    PharmacistCheck: "Esther Howard",
  },
  {
    id: 2,
    StartDate: "1 Feb, 2020",
    EndDate: "22 Oct, 2020",
    Preparedby: "Marvin McKinney",
    PharmacistCheck: "Bessie Cooper",
  },
  {
    id: 3,
    StartDate: "21 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Kathryn Murphy",
    PharmacistCheck: "Brooklyn Simmons",
  },
  {
    id: 4,
    StartDate: "8 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Arlene McCoy",
    PharmacistCheck: "Esther Howard",
  },
  {
    id: 5,
    StartDate: "1 Feb, 2020",
    EndDate: "22 Oct, 2020",
    Preparedby: "Marvin McKinney",
    PharmacistCheck: "Bessie Cooper",
  },
  {
    id: 6,
    StartDate: "21 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Kathryn Murphy",
    PharmacistCheck: "Brooklyn Simmons",
  },
  {
    id: 1,
    StartDate: "8 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Arlene McCoy",
    PharmacistCheck: "Esther Howard",
  },
  {
    id: 7,
    StartDate: "1 Feb, 2020",
    EndDate: "22 Oct, 2020",
    Preparedby: "Marvin McKinney",
    PharmacistCheck: "Bessie Cooper",
  },
  {
    id: 8,
    StartDate: "21 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Kathryn Murphy",
    PharmacistCheck: "Brooklyn Simmons",
  },
  {
    id: 9,
    StartDate: "8 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Arlene McCoy",
    PharmacistCheck: "Esther Howard",
  },
  {
    id: 10,
    StartDate: "1 Feb, 2020",
    EndDate: "22 Oct, 2020",
    Preparedby: "Marvin McKinney",
    PharmacistCheck: "Bessie Cooper",
  },
  {
    id: 11,
    StartDate: "21 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Kathryn Murphy",
    PharmacistCheck: "Brooklyn Simmons",
  },
  {
    id: 12,
    StartDate: "8 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Arlene McCoy",
    PharmacistCheck: "Esther Howard",
  },
  {
    id: 13,
    StartDate: "1 Feb, 2020",
    EndDate: "22 Oct, 2020",
    Preparedby: "Marvin McKinney",
    PharmacistCheck: "Bessie Cooper",
  },
  {
    id: 14,
    StartDate: "21 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Kathryn Murphy",
    PharmacistCheck: "Brooklyn Simmons",
  },
  {
    id: 15,
    StartDate: "8 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Arlene McCoy",
    PharmacistCheck: "Esther Howard",
  },
  {
    id: 16,
    StartDate: "1 Feb, 2020",
    EndDate: "22 Oct, 2020",
    Preparedby: "Marvin McKinney",
    PharmacistCheck: "Bessie Cooper",
  },
  {
    id: 17,
    StartDate: "21 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Kathryn Murphy",
    PharmacistCheck: "Brooklyn Simmons",
  },
  {
    id: 18,
    StartDate: "8 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Arlene McCoy",
    PharmacistCheck: "Esther Howard",
  },
  {
    id: 19,
    StartDate: "1 Feb, 2020",
    EndDate: "22 Oct, 2020",
    Preparedby: "Marvin McKinney",
    PharmacistCheck: "Bessie Cooper",
  },
  {
    id: 20,
    StartDate: "21 Sep, 2020",
    EndDate: "21 Sep, 2020",
    Preparedby: "Kathryn Murphy",
    PharmacistCheck: "Brooklyn Simmons",
  },
];

function SelecteReportTabel() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[20, 40]}
        // checkboxSelection
        sx={{
          "& .MuiDataGrid-root": {
            borderRadius: "0px !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            minHeight: "40px !important",
            height: "40px !important",
            color: "#00000061",
            fontSize: "14px",
          },
          "& .MuiDataGrid-cell": {
            minHeight: "40px !important",
            height: "40px !important",
            border: "1px solid #dddddd50",
          },
          "& .MuiDataGrid-row": {
            minHeight: "40px !important",
            height: "40px !important",
          },
          "& .MuiDataGrid-virtualScrollerContent": {
            height: `${20 * 40}px !important`,
            minHeight: "500px",
          },
          "& .MuiTypography-root": {
            fontSize: "14px",
            color: "#000000DE",
          },
        }}
      />
    </div>
  );
}
export default SelecteReportTabel;
