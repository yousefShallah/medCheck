import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const steps = [
  {
    title: "30 July 2023, 10:30 AM",
    activeTitle: "Scan right code",
    description: `NALOXONE HCL INJ 0.4MG/MLAMP (TELIGENT) 10X1ML`,
    activeTitleStatus: "success",
  },
  {
    title: "30 July 2023, 10:30 AM",
    activeTitle: "Scan right code",
    description: `NALOXONE HCL INJ 0.4MG/MLAMP (TELIGENT) 10X1ML`,
    activeTitleStatus: "pending",
  },
  {
    title: "30 July 2023, 10:30 AM",
    activeTitle: "Scan right code",
    description: `NALOXONE HCL INJ 0.4MG/MLAMP (TELIGENT) 10X1ML`,
    activeTitleStatus: "field",
  },
  {
    title: "30 July 2023, 10:30 AM",
    activeTitle: "Scan right code",
    description: `NALOXONE HCL INJ 0.4MG/MLAMP (TELIGENT) 10X1ML`,
    activeTitleStatus: "success",
  },
  {
    title: "30 July 2023, 10:30 AM",
    activeTitle: "Scan right code",
    description: `NALOXONE HCL INJ 0.4MG/MLAMP (TELIGENT) 10X1ML`,
    activeTitleStatus: "pending",
  },
  {
    title: "30 July 2023, 10:30 AM",
    activeTitle: "Scan right code",
    description: `NALOXONE HCL INJ 0.4MG/MLAMP (TELIGENT) 10X1ML`,
    activeTitleStatus: "field",
  },
  {
    title: "30 July 2023, 10:30 AM",
    activeTitle: "Scan right code",
    description: `NALOXONE HCL INJ 0.4MG/MLAMP (TELIGENT) 10X1ML`,
    activeTitleStatus: "success",
  },
  {
    title: "30 July 2023, 10:30 AM",
    activeTitle: "Scan right code",
    description: `NALOXONE HCL INJ 0.4MG/MLAMP (TELIGENT) 10X1ML`,
    activeTitleStatus: "pending",
  },
  {
    title: "30 July 2023, 10:30 AM",
    activeTitle: "Scan right code",
    description: `NALOXONE HCL INJ 0.4MG/MLAMP (TELIGENT) 10X1ML`,
    activeTitleStatus: "field",
  },
  {
    title: "30 July 2023, 10:30 AM",
    activeTitle: "Scan right code",
    description: `NALOXONE HCL INJ 0.4MG/MLAMP (TELIGENT) 10X1ML`,
    activeTitleStatus: "success",
  },
];

function AssistantLog({ hideTitle }) {
  return (
    <Box padding="0px 16px">
      {!hideTitle && (
        <Box>
          <Typography
            variant="h5"
            fontSize="24"
            fontWeight="600"
            color="#000000DE"
          >
            Period
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            fontWeight="400"
            color="#00000099"
          >
            04 Jun - 30 July, 2023
          </Typography>
        </Box>
      )}

      {/*  */}
      <Box padding="16px 0px 24px">
        {steps?.map((item, index) => {
          return (
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              height="80px"
            >
              <Typography variant="h5" color="#00000099" fontSize="16px">
                {item.title}
              </Typography>
              {index === 0 ? (
                <FiberManualRecordIcon
                  style={{
                    margin: "0px 24px",
                    fontSize: "20px",
                    color: "#BDBDBD",
                  }}
                />
              ) : (
                <Divider orientation="vertical">
                  <FiberManualRecordIcon
                    style={{
                      margin: "0px 16px",
                      fontSize: "20px",
                      color: "#BDBDBD",
                    }}
                  />
                </Divider>
              )}
              <Typography
                variant="h5"
                color={
                  item.activeTitleStatus === "success"
                    ? "#2E7D32"
                    : item.activeTitleStatus === "pending"
                    ? "#E65100"
                    : item.activeTitleStatus === "field"
                    ? "#C62828"
                    : "#BDBDBD"
                }
                fontSize={"16px"}
                fontWeight={"400"}
                marginRight="8px"
              >
                {item.activeTitle}
              </Typography>
              <Typography variant="h5" fontSize={"16px"} fontWeight={"400"}>
                {item.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default AssistantLog;
