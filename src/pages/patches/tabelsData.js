import { Box, Chip, Slider, Typography } from "@mui/material";

export const newPatchsRows = [
  {
    id: 1,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 5,
    Status: 70,
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 42,
    Status: 44,
  },
  {
    id: 3,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 45,
    Status: 66,
  },
  {
    id: 4,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 16,
    Status: 88,
  },
  {
    id: 5,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 16,
    Status: 98,
  },
  {
    id: 6,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 150,
    Status: 70,
  },
  {
    id: 7,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 44,
    Status: 70,
  },
  {
    id: 8,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 36,
    Status: 22,
  },
  {
    id: 1,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 35,
    Status: 70,
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 42,
    Status: 55,
  },
  {
    id: 3,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 45,
    Status: 44,
  },
  {
    id: 4,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 16,
    Status: 54,
  },
  {
    id: 5,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 16,
    Status: 70,
  },
  {
    id: 6,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 150,
    Status: 70,
  },
  {
    id: 7,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 44,
    Status: 70,
  },
  {
    id: 8,
    Patch: "Frances",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 36,
    Status: 70,
  },
  {
    id: 1,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 35,
    Status: 70,
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 42,
    Status: 70,
  },
  {
    id: 3,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 45,
    Status: 70,
  },
  {
    id: 4,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 16,
    Status: 70,
  },
  {
    id: 5,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 16,
    Status: 70,
  },
  {
    id: 6,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 150,
    Status: 66,
  },
  {
    id: 7,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 44,
    Status: 70,
  },
  {
    id: 8,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 36,
    Status: 70,
  },
  {
    id: 1,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 35,
    Status: 55,
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 42,
    Status: 44,
  },
  {
    id: 3,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 45,
    Status: 65,
  },
  {
    id: 4,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 16,
    Status: 70,
  },
  {
    id: 5,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 16,
    Status: 70,
  },
  {
    id: 6,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 150,
    Status: 70,
  },
];

export const newPatchsColumns = [
  { field: "Patch", headerName: "Patch", width: 436, height: 24 },
  { field: "timeDate", headerName: "Time & Date", width: 436, height: 24 },
  { field: "Patients", headerName: "Patients", width: 436, height: 24 },
  {
    field: "Status",
    headerName: "Status",
    width: 436,
    height: 24,
    renderCell: (params) => {
      return (
        <Box
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Slider
            size="small"
            defaultValue={params.value}
            style={{ color: "#1D617A", height: "4px", width: "200px" }}
            aria-label="Default"
            valueLabelDisplay="auto"
            disabled
            sx={{
              "& .MuiSlider-thumb": {
                display: "none",
              },
            }}
          />
          <Typography variant="span" style={{ paddingLeft: "16px" }}>
            {params.value}%
          </Typography>
        </Box>
      );
    },
  },
];

export const revisedRows = [
  {
    id: 1,
    Patients: "Cameron Williamson",
    Code: "REG",
    StartDate: "08 October, 2023",
    EndDate: "01 May, 2023",
    Facility: "Facility Name",
    DaystoPackage: "177",
    Assistant: "Bessie Cooper",
    Pharmacist: "Guy Hawkins",
  },
  {
    id: 1,
    Patients: "Cameron Williamson",
    Code: "REG",
    StartDate: "08 October, 2023",
    EndDate: "01 May, 2023",
    Facility: "Facility Name",
    DaystoPackage: "177",
    Assistant: "Bessie Cooper",
    Pharmacist: "Guy Hawkins",
  },
  {
    id: 1,
    Patients: "Cameron Williamson",
    Code: "REG",
    StartDate: "08 October, 2023",
    EndDate: "01 May, 2023",
    Facility: "Facility Name",
    DaystoPackage: "177",
    Assistant: "Bessie Cooper",
    Pharmacist: "Guy Hawkins",
  },
  {
    id: 1,
    Patients: "Cameron Williamson",
    Code: "REG",
    StartDate: "08 October, 2023",
    EndDate: "01 May, 2023",
    Facility: "Facility Name",
    DaystoPackage: "177",
    Assistant: "Bessie Cooper",
    Pharmacist: "Guy Hawkins",
  },
  {
    id: 1,
    Patients: "Cameron Williamson",
    Code: "REG",
    StartDate: "08 October, 2023",
    EndDate: "01 May, 2023",
    Facility: "Facility Name",
    DaystoPackage: "177",
    Assistant: "Bessie Cooper",
    Pharmacist: "Guy Hawkins",
  },
  {
    id: 1,
    Patients: "Cameron Williamson",
    Code: "REG",
    StartDate: "08 October, 2023",
    EndDate: "01 May, 2023",
    Facility: "Facility Name",
    DaystoPackage: "177",
    Assistant: "Bessie Cooper",
    Pharmacist: "Guy Hawkins",
  },
  {
    id: 1,
    Patients: "Cameron Williamson",
    Code: "REG",
    StartDate: "08 October, 2023",
    EndDate: "01 May, 2023",
    Facility: "Facility Name",
    DaystoPackage: "177",
    Assistant: "Bessie Cooper",
    Pharmacist: "Guy Hawkins",
  },
  {
    id: 1,
    Patients: "Cameron Williamson",
    Code: "REG",
    StartDate: "08 October, 2023",
    EndDate: "01 May, 2023",
    Facility: "Facility Name",
    DaystoPackage: "177",
    Assistant: "Bessie Cooper",
    Pharmacist: "Guy Hawkins",
  },
  {
    id: 1,
    Patients: "Cameron Williamson",
    Code: "REG",
    StartDate: "08 October, 2023",
    EndDate: "01 May, 2023",
    Facility: "Facility Name",
    DaystoPackage: "177",
    Assistant: "Bessie Cooper",
    Pharmacist: "Guy Hawkins",
  },
  {
    id: 1,
    Patients: "Cameron Williamson",
    Code: "REG",
    StartDate: "08 October, 2023",
    EndDate: "01 May, 2023",
    Facility: "Facility Name",
    DaystoPackage: "177",
    Assistant: "Bessie Cooper",
    Pharmacist: "Guy Hawkins",
  },
];

export const revisedColumns = [
  { field: "Patients", headerName: "Patients", width: 250 },
  { field: "Code", headerName: "Code", width: 150 },
  { field: "StartDate", headerName: "Start Date", width: 250 },
  { field: "EndDate", headerName: "End Date", width: 250 },
  { field: "Facility", headerName: "Facility", width: 200 },
  { field: "DaystoPackage", headerName: "Days to Package", width: 230 },
  { field: "Assistant", headerName: "Assistant", width: 230 },
  { field: "Pharmacist", headerName: "Pharmacist", width: 200 },
];

export const complatedRows = [
  {
    id: 1,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 5,
    DIN: 653518,
    Status: "Completed",
    Technician: "Cameron Williamson",
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 3,
    DIN: 449003,
    Status: "Completed",
    Technician: "Jessica Name",
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 3,
    DIN: 449003,
    Status: "Completed",
    Technician: "Jessica Name",
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 3,
    DIN: 449003,
    Status: "Completed",
    Technician: "Jessica Name",
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 3,
    DIN: 449003,
    Status: "Completed",
    Technician: "Jessica Name",
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 3,
    DIN: 449003,
    Status: "Completed",
    Technician: "Jessica Name",
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 3,
    DIN: 449003,
    Status: "Completed",
    Technician: "Jessica Name",
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 3,
    DIN: 449003,
    Status: "Completed",
    Technician: "Jessica Name",
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 3,
    DIN: 449003,
    Status: "Completed",
    Technician: "Jessica Name",
  },
  {
    id: 2,
    Patch: "DAIL230521130510",
    timeDate: "27 Oct 2022 8:30 AM",
    Patients: 3,
    DIN: 449003,
    Status: "Completed",
    Technician: "Jessica Name",
  },
];

export const complatedColumns = [
  { field: "Patch", headerName: "Patch", width: 300 },
  { field: "timeDate", headerName: "Time & Date", width: 300 },
  { field: "Patients", headerName: "Patients", width: 200 },
  { field: "DIN", headerName: "DIN", width: 280 },
  {
    field: "Status",
    headerName: "Status",
    width: 300,
    renderCell: (params) => {
      return (
        <Chip
          label={params.value}
          style={{ background: "#E8F5E9", color: "#2E7D32" }}
        />
      );
    },
  },
  { field: "Technician", headerName: "Technician", width: 300 },
];
