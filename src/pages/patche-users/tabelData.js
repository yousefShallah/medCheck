import { Chip } from "@mui/material";

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", { month: "long" });
}
let currentDate = `${day}${getMonthName(month)}, ${year}`;

export const patcheUsersColumns = [
  { field: "Patients", headerName: "Patients", width: 300 },
  { field: "Code", headerName: "Code", width: 280 },
  { field: "StartDate", headerName: "Start Date", width: 300 },
  { field: "EndDate", headerName: "End Date", width: 300 },
  { field: "DaystoPackage", headerName: "Days to Package", width: 300 },
  {
    field: "Status",
    headerName: "Status",
    width: 300,
    renderCell: (params) => {
      return (
        <Chip
          label={params.value}
          style={{
            background:
              params.value === "Completed "
                ? "#E8F5E9"
                : params.value === "In Progress"
                ? "#FFF3E0"
                : "#F5F5F5",
            color:
              params.value === "Completed "
                ? "#2E7D32"
                : params.value === "In Progress"
                ? "#EF6C00"
                : "#424242",
            borderRadius: "4px",
            width: "auto",
            fontSize: "16px",
            fontWeight: "400",
          }}
        />
      );
    },
  },
];

export const patcheUsersRows = [
  {
    id: 11,
    Patients: "Cameron Williamson",
    Code: "REG",
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
    Status: "Completed ",
  },
  {
    id: 12,
    Patients: "Jane Cooper",
    Code: "DISP",
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
    Status: "Completed ",
  },
  {
    id: 13,
    Patients: "Devon Lane",
    Code: "DUO",
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
    Status: "Completed ",
  },
  {
    id: 14,
    Patients: "Bessie Cooper",
    Code: "MACH",
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
    Status: "Completed ",
  },

  {
    id: 1,
    Patients: "Snow Lannister",
    Code: "REG",
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
    Status: "Completed ",
  },
  {
    id: 2,
    Patients: "Lannister",
    Status: "Completed ",
    Code: "DUO",
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 3,
    Patients: "Stark Lannister",
    Status: "In Progress",
    Code: "DISP",
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 4,
    Patients: "Lannister Stark",
    Status: "In Progress",
    Code: "MACH",
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 5,
    Patients: "Melisandre Targaryen",
    Status: "Pending",
    Code: "DUO",
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 6,
    Patients: "Targaryen Melisandre",
    Status: "Pending",
    Code: "REG",
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
];
