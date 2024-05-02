import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import Chart from "./chart";

function ChartCard() {
  const tabelData = [
    {
      label: "Pending",
      color: "#363636",
      num: "22",
      persent: "28.6%",
    },
    {
      label: "In progress",
      color: "#C35626",
      num: "12",
      persent: "42.9%",
    },
    {
      label: "Revised",
      color: "#C32E3A",
      num: "22",
      persent: "28.6%",
    },
    {
      label: "Completed",
      color: "#1E8D77",
      num: "12",
      persent: "28.6%",
    },
    {
      label: "Delivered",
      color: "#9C27B0",
      num: "7",
      persent: "28.6%",
    },
    {
      label: "Checked",
      color: "#F59E0B",
      num: "22",
      persent: "28.6%",
    },
  ];
  return (
    <Box display="flex" justifyContent="space-between">
      <Box padding="0px 16px">
        <Chart
          chartLabels={[
            "Pending",
            "In progress",
            "Revised",
            "Completed",
            "Checked",
            "Delivered",
          ]}
          chartSeries={[33, 22, 44, 33, 22, 44]}
          tag="patient-LastWeek"
          legend={false}
          legendPosition="bottom"
          colors={[
            "#363636",
            "#C35626",
            "#C32E3A",
            "#1E8D77",
            "#9C27B0",
            "#F59E0B",
          ]}
        />
      </Box>
      <Box padding="10px 0px 0px 24px">
        <Table aria-label="customized table">
          <TableRow>
            <TableCell
              width="200px"
              style={{
                borderBottom: "none",
                color: "#737373",
                fontSize: "14px",
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="center"
              width="200px"
              style={{
                borderBottom: "none",
                color: "#737373",
                fontSize: "14px",
              }}
            >
              Num
            </TableCell>
            <TableCell
              align="center"
              width="200px"
              style={{
                borderBottom: "none",
                color: "#737373",
                fontSize: "14px",
              }}
            >
              %
            </TableCell>
          </TableRow>
          <TableBody>
            {tabelData?.map((item) => {
              return (
                <TableRow>
                  <TableCell
                    style={{
                      borderBottom: "none",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "16px",
                      color: "#404040",
                    }}
                  >
                    <Box
                      width="12px"
                      height="12px"
                      bgcolor={item.color}
                      borderRadius="100%"
                      margin="0px 8px 0px 0px"
                    ></Box>
                    {item.label}
                  </TableCell>
                  <TableCell
                    style={{
                      borderBottom: "none",
                      fontSize: "16px",
                      color: "#0A0A0A",
                      fontWeight: 600,
                    }}
                    align="center"
                  >
                    {item.num}
                  </TableCell>
                  <TableCell
                    style={{
                      borderBottom: "none",
                      fontSize: "16px",
                      color: "#0A0A0A",
                      fontWeight: 600,
                    }}
                    align="center"
                  >
                    {item.persent}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default ChartCard;
