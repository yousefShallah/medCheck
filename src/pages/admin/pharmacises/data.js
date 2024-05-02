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

export const pharmacisesColumns = [
  { field: "AssistantName", headerName: "Assistant Name", width: 300 },
  { field: "ID", headerName: "ID", width: 300 },
  { field: "Phone", headerName: "Phone", width: 300 },
  { field: "ActiveBlisterPack", headerName: "Active Blister Pack", width: 300 },
  { field: "EXBlisterPack", headerName: "EX Blister Pack", width: 300 },
];

export const pharmacisesRows = [
  {
    id: 1,
    AssistantName: "Courtney Henry",
    ID: 4152,
    Phone: "(316) 555-0116",
    ActiveBlisterPack: 7,
    EXBlisterPack: 67,
  },
  {
    id: 2,
    AssistantName: "Darlene Robertson",
    ID: 4152,
    Phone: "(225) 555-0118",
    ActiveBlisterPack: 7,
    EXBlisterPack: 67,
  },
  {
    id: 3,
    AssistantName: "Theresa Webb",
    ID: 4152,
    Phone: "(316) 555-0116",
    ActiveBlisterPack: 7,
    EXBlisterPack: 67,
  },
  {
    id: 4,
    AssistantName: "Darrell Steward",
    ID: 4152,
    Phone: "(307) 555-0133",
    ActiveBlisterPack: 7,
    EXBlisterPack: 67,
  },
  {
    id: 5,
    AssistantName: "Courtney Henry",
    ID: 4152,
    Phone: "(316) 555-0116",
    ActiveBlisterPack: 7,
    EXBlisterPack: 67,
  },
  {
    id: 6,
    AssistantName: "Darlene Robertson",
    ID: 4152,
    Phone: "(225) 555-0118",
    ActiveBlisterPack: 7,
    EXBlisterPack: 67,
  },
  {
    id: 7,
    AssistantName: "Theresa Webb",
    ID: 4152,
    Phone: "(316) 555-0116",
    ActiveBlisterPack: 7,
    EXBlisterPack: 67,
  },
  {
    id: 8,
    AssistantName: "Darrell Steward",
    ID: 4152,
    Phone: "(307) 555-0133",
    ActiveBlisterPack: 7,
    EXBlisterPack: 67,
  },
  {
    id: 9,
    AssistantName: "Darrell Steward",
    ID: 4152,
    Phone: "(307) 555-0133",
    ActiveBlisterPack: 7,
    EXBlisterPack: 67,
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
