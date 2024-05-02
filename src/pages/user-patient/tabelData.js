// const date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// function getMonthName(monthNumber) {
//   const date = new Date();
//   date.setMonth(monthNumber - 1);

//   return date.toLocaleString("en-US", { month: "long" });
// }
// let currentDate = `${day}${getMonthName(month)}, ${year}`;

// export const patcheUsersColumns = [
//   {
//     field: "Patients",
//     headerName: "Patients",
//     width: 650,
//     renderCell: (params) => (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "flex-start",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
//           style={{ width: "40px", height: "40px", marginRight: "10px" }}
//         />
//         <p> {params.value} </p>
//       </div>
//     ),
//   },
//   { field: "Status", headerName: "Status", width: 200 },
//   { field: "Code", headerName: "Code", width: 100 },
//   { field: "DaystoPackage", headerName: "Days to Package", width: 200 },
//   { field: "UPC", headerName: "UPC", width: 150 },
//   { field: "DIN", headerName: "DIN", width: 150 },
//   { field: "Prescriber", headerName: "Prescriber", width: 200 },
//   { field: "Ref", headerName: "Ref", width: 100 },
// ];

export const patcheUsersRows = [
  {
    id: 1,
    Medicine: "Plavix 75mg/tab(Clopidogrel Bisulfate 75mg/tab)",
    Direction: "TAKE TWO TABLETS (=40MG) ORALLY ONCE DAILY",
    DIN: {
      value: "0222905",
      uniqe: "265946",
    },
    UPC: {
      value: "6206413278",
      uniqe: "265946262",
    },
    Prescriber: "ANDREAS",
    Ref: "20",
    Rx: "93622",
    Breakfast: "7.5",
    Lunch: "",
    Dinner: "",
    Bedtime: "5.5",
    Total: "14.75",
  },
  {
    id: 2,
    Medicine: "Plavix 75mg/tab(Clopidogrel Bisulfate 75mg/tab)",
    Direction: "TAKE TWO TABLETS (=40MG) ORALLY ONCE DAILY",
    DIN: {
      value: "02242905",
      uniqe: "26596446",
    },
    UPC: {
      value: "620641013278",
      uniqe: "26596446262",
    },
    Prescriber: "ANDREAS WOLFF",
    Ref: "25",
    Rx: "93654",
    Breakfast: "7.5",
    Lunch: "",
    Dinner: "",
    Bedtime: "5.5",
    Total: "14.75",
  },
  {
    id: 3,
    Medicine: "Plavix 75mg/tab(Clopidogrel Bisulfate 75mg/tab)",
    Direction: "TAKE TWO TABLETS (=40MG) ORALLY",
    DIN: {
      value: "0224290533",
      uniqe: "2659644622",
    },
    UPC: {
      value: "620641013233",
      uniqe: "265964462655",
    },
    Prescriber: "WOLFF",
    Ref: "18",
    Rx: "93652",
    Breakfast: "7.5",
    Lunch: "",
    Dinner: "",
    Bedtime: "5.5",
    Total: "14.75",
  },
  {
    id: 4,
    Medicine: "Plavix 75mg/tab(Clopidogrel Bisulfate 75mg/tab)",
    Direction: "TAKE TWO TABLETS (=40MG) ORALLY ONCE DAILY",
    DIN: {
      value: "022405",
      uniqe: "266446",
    },
    UPC: {
      value: "6206413278",
      uniqe: "265964462",
    },
    Prescriber: "ANDREAS WOLFF",
    Ref: "25",
    Rx: "93654",
    Breakfast: "7.5",
    Lunch: "",
    Dinner: "",
    Bedtime: "5.5",
    Total: "14.75",
  },
  {
    id: 5,
    Medicine: "Plavix 75mg/tab(Clopidogrel Bisulfate 75mg/tab)",
    Direction: "TAKE TWO TABLETS (=40MG) ORALLY ONCE DAILY",
    DIN: {
      value: "02242905",
      uniqe: "26596446",
    },
    UPC: {
      value: "620641013278",
      uniqe: "26596446262",
    },
    Prescriber: "ANDREAS WOLFF",
    Ref: "25",
    Rx: "93654",
    Breakfast: "7.5",
    Lunch: "",
    Dinner: "",
    Bedtime: "5.5",
    Total: "14.75",
  },
  {
    id: 6,
    Medicine: "Plavix 75mg/tab(Clopidogrel Bisulfate 75mg/tab)",
    Direction: "TAKE TWO TABLETS (=40MG) ORALLY ONCE DAILY",
    DIN: {
      value: "02242905",
      uniqe: "26596446",
    },
    UPC: {
      value: "620641013333",
      uniqe: "26596446333",
    },
    Prescriber: "WOLFF",
    Ref: "55",
    Rx: "111113",
    Breakfast: "7.5",
    Lunch: "",
    Dinner: "",
    Bedtime: "5.5",
    Total: "14.75",
  },
  {
    id: 7,
    Medicine: "Plavix 75mg/tab(Clopidogrel Bisulfate 75mg/tab)",
    Direction: "TAKE TWO TABLETS (=40MG) ORALLY ONCE DAILY",
    DIN: {
      value: "02242905",
      uniqe: "26596446",
    },
    UPC: {
      value: "620641013278",
      uniqe: "26596446262",
    },
    Prescriber: "ANDREAS WOLFF",
    Ref: "25",
    Rx: "93654",
    Breakfast: "7.5",
    Lunch: "",
    Dinner: "",
    Bedtime: "5.5",
    Total: "14.75",
  },
  {
    id: 7,
    Medicine: "Plavix 75mg/tab(Clopidogrel Bisulfate 75mg/tab)",
    Direction: "TAKE TWO TABLETS (=40MG) ORALLY ONCE DAILY",
    DIN: {
      value: "02242905",
      uniqe: "26596446",
    },
    UPC: {
      value: "620641013278",
      uniqe: "26596446262",
    },
    Prescriber: "ANDREAS WOLFF",
    Ref: "25",
    Rx: "93654",
    Breakfast: "7.5",
    Lunch: "",
    Dinner: "",
    Bedtime: "5.5",
    Total: "14.75",
  },
];
