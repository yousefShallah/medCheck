import React, { useState } from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import {
  dummyData,
  dummyDataPatchReview,
  dummyPatchPreviewTitle,
} from "./data";
import PrintIcon from "@mui/icons-material/Print";

function BlisterpacksCard({ activeMedicineFinalView, leftHandMode }) {
  const [selectedPatchId, setSelectedPatchId] = useState(1);

  const handelSelectedNewPatch = (item) => {
    setSelectedPatchId(item.id);
  };

  return (
    <Box height="84vh">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={12}>
          <Box>
            <Grid container columns={{ xs: 4, md: 12 }}>
              <Grid item xs={5}>
                <Box margin="0px 0px 16px">
                  <Grid
                    container
                    columns={{ xs: 4, md: 12 }}
                    justifyContent="flex-start"
                  >
                    <Grid item xs={3} display="flex" alignItems="center">
                      <Typography color="#000000" variant="h2" fontSize="20px">
                        Final View
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Chip
                        label="2 May - 20 June"
                        style={{
                          background: "#F5F5F5",
                          color: "#424242",
                          borderRadius: "4px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Chip
                        label="DISP"
                        style={{
                          background: "#2E7D3230",
                          color: "#2E7D32",
                          borderRadius: "4px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={7}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" alignItems="center" margin="4px 0px 8px">
        {dummyData.map((item, index) => {
          return (
            <Box
              onClick={() => handelSelectedNewPatch(item)}
              key={index}
              bgcolor="#1D617A30"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              boxShadow="0px 0px 10px #f5f5f5"
              width="100px"
              height="100px"
              borderRadius="8px"
              flexDirection="column"
              margin="0rem 1rem 0rem 0rem"
              border="3px solid"
              borderColor={
                selectedPatchId === item.id ? "#1D617A" : "transparent"
              }
              style={{
                cursor: "pointer",
              }}
            >
              <Typography
                variant="h6"
                fontSize="22px"
                fontWeight="600"
                color={"#1D617A"}
              >
                {item.id}
              </Typography>
              <Box>
                {item.check === "success" ? (
                  <Box>
                    <CheckCircleIcon
                      style={{
                        color: "#2E7D32",
                        fontSize: "24px",
                        margin: "0px 4px",
                      }}
                    />
                    <PrintIcon
                      style={{
                        color: "#EF6C00",
                        fontSize: "24px",
                        margin: "0px 4px",
                      }}
                    />
                  </Box>
                ) : (
                  item.check === "field" && (
                    <Box>
                      <ErrorIcon
                        style={{
                          color: "#B71c1c",
                          fontSize: "24px",
                          margin: "0px 4px",
                        }}
                      />
                    </Box>
                  )
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box height="62vh" margin="16px 0px 0px">
        <Grid
          container
          columns={{ xs: 4, md: 12 }}
          justifyContent="space-between"
        >
          <Grid
            item
            xs={2}
            width="100%"
            padding="16px 0px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4" fontSize="18px" color="#00000099">
              Date
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Grid
              container
              columns={{ xs: 4, md: 12 }}
              justifyContent="space-between"
              flexDirection={"row"}
            >
              {dummyPatchPreviewTitle?.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={3}
                    key={index}
                    width="100%"
                    padding="30px 0px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h4" fontSize="18px" color="#00000099">
                      {item}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Box display="flex" flexDirection={"column"}>
          {dummyDataPatchReview &&
            dummyDataPatchReview.length &&
            dummyDataPatchReview?.map((itemKey) => {
              return (
                itemKey.key === selectedPatchId &&
                itemKey.data?.map((item) => {
                  return (
                    <Box key={item.title}>
                      <Grid
                        container
                        columns={{ xs: 4, md: 12 }}
                        justifyContent="center"
                      >
                        <Grid
                          item
                          xs={2}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          padding="2px"
                        >
                          <Box
                            borderRadius="4px"
                            width="100%"
                            height="66px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            bgcolor="#F5F5F5"
                            color="#000000"
                          >
                            <Typography
                              variant="h2"
                              color="#000000DE"
                              fontSize="16px"
                              fontWeight="400"
                            >
                              {item.title}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={10}>
                          <Grid
                            container
                            columns={{ xs: 4, md: 12 }}
                            justifyContent="space-between"
                            flexDirection={"row"}
                          >
                            {item?.data?.map((dataItem) => {
                              return (
                                <Grid
                                  item
                                  xs={3}
                                  key={dataItem}
                                  display="flex"
                                  justifyContent="center"
                                  alignItems="center"
                                  padding="2px"
                                >
                                  <Box
                                    borderRadius="4px"
                                    width="100%"
                                    height="66px"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    bgcolor={dataItem ? "#ECEFF1" : "#ffffff"}
                                    border="1px solid #25323830"
                                    color="#263238"
                                  >
                                    <Typography
                                      variant="h6"
                                      color="#263238"
                                      fontSize="24px"
                                      fontWeight="600"
                                    >
                                      {dataItem}
                                    </Typography>
                                  </Box>
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  );
                })
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}

export default BlisterpacksCard;
