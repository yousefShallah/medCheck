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
  { field: "Patients", headerName: "Patients", width: 250 },
  { field: "Code", headerName: "Code", width: 200 },
  { field: "DaystoPackage", headerName: "Days to Package", width: 200 },
  { field: "StartDate", headerName: "Start Date", width: 300 },
  { field: "EndDate", headerName: "End Date", width: 300 },
  {
    field: "Status",
    headerName: "Status",
    width: 200,
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
            width: "150px",
          }}
        />
      );
    },
  },
];

export const patcheUsersRows = [
  {
    id: 1,
    Patients: "Snow Lannister",
    Code: 35,
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
    Status: "Completed ",
  },
  {
    id: 2,
    Patients: "Lannister",
    Status: "Completed ",
    Code: 42,
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 3,
    Patients: "Stark Lannister",
    Status: "In Progress",
    Code: 45,
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 4,
    Patients: "Lannister Stark",
    Status: "In Progress",
    Code: 16,
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 5,
    Patients: "Melisandre Targaryen",
    Status: "Pending",
    Code: 14,
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 6,
    Patients: "Targaryen Melisandre",
    Status: "Pending",
    Code: 150,
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 7,
    Patients: "Melisandre Targaryen",
    Status: "Pending",
    Code: 14,
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 8,
    Patients: "Targaryen Melisandre",
    Status: "Pending",
    Code: 150,
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
  {
    id: 9,
    Patients: "Targaryen Melisandre",
    Status: "Pending",
    Code: 150,
    DaystoPackage: 22,
    StartDate: currentDate,
    EndDate: currentDate,
  },
];

//
export const userProfileColumns = [
  { field: "StartDate", headerName: "Start Date", width: 150 },
  { field: "EndDate", headerName: "End Date", width: 150 },
  { field: "Code", headerName: "Code", width: 100 },
  { field: "DaystoPackage", headerName: "Days to Package", width: 150 },
  { field: "TotalPils", headerName: "Total Pils", width: 100 },
  { field: "Revised", headerName: "Revised", width: 100 },
  { field: "Assistant", headerName: "Assistant", width: 150 },
  { field: "Pharmacist", headerName: "Pharmacist", width: 200 },
];
export const userProfileRows = [
  {
    id: 1,
    StartDate: currentDate,
    EndDate: currentDate,
    Code: "REG",
    DaystoPackage: 22,
    TotalPils: "798",
    Revised: 1,
    Assistant: "Jane Cooper ",
    Pharmacist: "Brooklyn Simmons",
  },
  {
    id: 2,
    StartDate: currentDate,
    EndDate: currentDate,
    Code: "REG",
    DaystoPackage: 22,
    TotalPils: "798",
    Revised: 1,
    Assistant: "Guy Hawkins ",
    Pharmacist: "Marvin McKinney",
  },
  {
    id: 3,
    StartDate: currentDate,
    EndDate: currentDate,
    Code: "REG",
    DaystoPackage: 22,
    TotalPils: "798",
    Revised: 1,
    Assistant: "Annette Black",
    Pharmacist: "Jacob Jones",
  },
  {
    id: 4,
    StartDate: currentDate,
    EndDate: currentDate,
    Code: "REG",
    DaystoPackage: 22,
    TotalPils: "798",
    Revised: 1,
    Assistant: "Jane Cooper ",
    Pharmacist: "Brooklyn Simmons",
  },
  {
    id: 5,
    StartDate: currentDate,
    EndDate: currentDate,
    Code: "REG",
    DaystoPackage: 22,
    TotalPils: "798",
    Revised: 1,
    Assistant: "Guy Hawkins ",
    Pharmacist: "Esther Howard",
  },
  {
    id: 6,
    StartDate: currentDate,
    EndDate: currentDate,
    Code: "REG",
    DaystoPackage: 22,
    TotalPils: "798",
    Revised: 1,
    Assistant: "Jane Cooper ",
    Pharmacist: "Brooklyn Simmons",
  },
  {
    id: 7,
    StartDate: currentDate,
    EndDate: currentDate,
    Code: "REG",
    DaystoPackage: 22,
    TotalPils: "798",
    Revised: 1,
    Assistant: "Guy Hawkins ",
    Pharmacist: "Marvin McKinney",
  },
  {
    id: 8,
    StartDate: currentDate,
    EndDate: currentDate,
    Code: "REG",
    DaystoPackage: 22,
    TotalPils: "798",
    Revised: 1,
    Assistant: "Annette Black",
    Pharmacist: "Jacob Jones",
  },
  {
    id: 9,
    StartDate: currentDate,
    EndDate: currentDate,
    Code: "REG",
    DaystoPackage: 22,
    TotalPils: "798",
    Revised: 1,
    Assistant: "Jane Cooper ",
    Pharmacist: "Brooklyn Simmons",
  },
  {
    id: 10,
    StartDate: currentDate,
    EndDate: currentDate,
    Code: "REG",
    DaystoPackage: 22,
    TotalPils: "798",
    Revised: 1,
    Assistant: "Guy Hawkins ",
    Pharmacist: "Esther Howard",
  },
];
