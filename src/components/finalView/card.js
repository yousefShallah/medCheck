import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import "./index.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import {
  dummyData,
  dummyDataPatchReview,
  dummyPatchPreviewTitle,
} from "./data";
import PrintIcon from "@mui/icons-material/Print";

function Card({ activeMedicineFinalView, leftHandMode }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedPatchId, setSelectedPatchId] = useState(1);
  const [flipHorizontal, setFlipHorizontal] = useState("row");
  const [flipVertical, setFlipVertical] = useState("column");

  const handelSelectedNewPatch = (item) => {
    setSelectedPatchId(item.id);
  };
  const handelChangeFlipHorizontal = (event) => {
    setFlipHorizontal(!event.target.checked ? "row-reverse" : "row");
  };

  const handelChangeFlipVertical = (event) => {
    setFlipVertical(!event.target.checked ? "column-reverse" : "column");
  };
  const handleCloseDialogImg = () => {
    setOpenDetails(false);
  };
  const renderPatientDetailsDialog = () => {
    const data = [
      {
        title: "Direction",
        value: "TAKE TWO TABLETS (=40MG) ORALLY ONCE DAILY ",
      },
      {
        title: "DIN ",
        value: "02242905",
      },
      {
        title: "UPC",
        value: "620641013278",
      },
      {
        title: "Prescriber",
        value: "ANDREAS WOLFF",
      },
      {
        title: "Ref",
        value: "25",
      },
      {
        title: "Rx#",
        value: "93654",
      },
    ];
    const timeDetails = [
      {
        title: "Breakfast",
        value: "7",
      },
      {
        title: "Lunch",
        value: "",
      },
      {
        title: "Dinner",
        value: "",
      },
      {
        title: "Bedtime",
        value: "4",
      },
      {
        title: "Total",
        value: "11.75",
      },
    ];
    return (
      <Dialog
        open={openDetails}
        onClose={handleCloseDialogImg}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-elevation": {
            maxWidth: "1630px",
            width: "630px",
            height: "610px",
          },
        }}
      >
        <DialogContent>
          <Box>
            <Box className="img">
              <img
                src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
                alt="img"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "4px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              display="flex"
              align-items="center"
              justify-content="flex-start"
              flexDirection="column"
            >
              <Typography
                margin="8px 0px 10px"
                fontSize="20px"
                fontWeight="bold"
                color="#000000DE"
              >
                Aspirin protect 100mg/tab(Acetylsalicylic Acid 100mg/tab)
              </Typography>
              {data.map((item) => {
                return (
                  <Box
                    display="flex"
                    align-items="center"
                    justify-content="flex-start"
                    margin="0px 0px 12px 0px"
                  >
                    <Box width="70px">
                      <Typography
                        variant="span"
                        fontSize="14px"
                        color="#00000061"
                        fontWeight="500"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Box marginLeft="30px">
                      <Typography
                        variant="span"
                        fontSize="14px"
                        color="#000000DE"
                      >
                        {item.value ? item.value : "--"}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box marginTop="8px" display="flex" align-items="center">
              {timeDetails.map((item) => {
                return (
                  <Box
                    className="patient-details-time"
                    display="flex"
                    align-items="center"
                    justify-content="flex-start"
                    flexDirection="column"
                  >
                    <Box
                      bgcolor="#00000008"
                      width="115px"
                      height="50px"
                      marginBottom="8px"
                      color="#00000061"
                      fontSize="14px"
                      fontWeight="600"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography> {item.title} </Typography>
                    </Box>
                    <Box
                      style={{
                        background:
                          item.value && item.title !== "Total"
                            ? "#E8F5E9"
                            : item.title !== "Total"
                            ? "#FAFAFA"
                            : "#fff",
                      }}
                      bgcolor="#00000005"
                      width="115px"
                      height="50px"
                      color="#00000099"
                      fontSize="16px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="2px"
                    >
                      {item.title !== "Total" ? (
                        <Typography>
                          {item.value ? item.value : "--"}
                        </Typography>
                      ) : (
                        <Typography
                          variant="span"
                          color="#000000DE"
                          fontSize="16px"
                          fontWeight="400"
                        >
                          {item.value ? item.value : "--"}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialogImg}
            style={{
              color: "#1D617A",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const handelOpenImage = () => {
    setOpenDetails(true);
  };

  return (
    <Box height="84vh">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={12}>
          <Box>
            <Grid container columns={{ xs: 4, md: 12 }}>
              <Grid item xs={4}>
                <Box>
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
                          fontSize: "16px",
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
                          fontSize: "16px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <Box>
                  {activeMedicineFinalView ? (
                    <Box height="50px">
                      <FormGroup>
                        <Grid
                          container
                          columns={{ xs: 4, md: 12 }}
                          justifyContent="flex-end"
                        >
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Flip Horizontal "
                            onChange={(event) =>
                              handelChangeFlipHorizontal(event)
                            }
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: "16px",
                              },
                            }}
                          />
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Flip Vertical"
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                            onChange={(event) =>
                              handelChangeFlipVertical(event)
                            }
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: "16px",
                              },
                            }}
                          />
                        </Grid>
                      </FormGroup>
                    </Box>
                  ) : (
                    <Box display="flex" justifyContent="flex-end">
                      <Button
                        onClick={handelOpenImage}
                        style={{
                          background: "#EEEEEE",
                          minWidth: "10px",
                          width: "52px",
                          height: "52px",
                        }}
                      >
                        <ErrorIcon
                          style={{
                            color: "#0000008F",
                            fontSize: "20px",
                          }}
                        />
                      </Button>
                    </Box>
                  )}
                </Box>
              </Grid>
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
              border={selectedPatchId === item.id ? "3px solid" : "1px solid"}
              borderColor={selectedPatchId === item.id ? "#1D617A" : "#2E7D32"}
            >
              <Box
                border={selectedPatchId === item.id ? "none" : "2px solid #fff"}
                width="96px"
                height="100%"
                borderRadius="8px"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                flexDirection="column"
                style={{ cursor: "pointer" }}
              >
                <Typography
                  variant="h6"
                  fontSize="22px"
                  fontWeight="600"
                  color={
                    selectedPatchId === item.id
                      ? "#1D617A"
                      : item.check === "success"
                      ? "#2E7D32"
                      : item.check === "field"
                      ? "#B71C1C"
                      : "#1D617A"
                  }
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
            </Box>
          );
        })}
      </Box>
      <Box height="62vh">
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
              flexDirection={flipHorizontal}
            >
              {dummyPatchPreviewTitle?.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={3}
                    key={index}
                    width="100%"
                    padding="16px 0px"
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
        <Box display="flex" flexDirection={flipVertical}>
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
                            flexDirection={flipHorizontal}
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
        <Box
          display="flex"
          justifyContent={leftHandMode ? "flex-start" : "flex-end"}
          alignItems="center"
          marginTop="20px"
        >
          <Button
            variant="outlined"
            style={{
              borderColor: "#1D617A",
              color: "#1D617A",
            }}
          >
            Print Selected
          </Button>
          <Button
            variant="contained"
            style={{
              background: "#1D617A",
              color: "#fff",
              marginLeft: "16px",
            }}
          >
            Print all labels
          </Button>
        </Box>
      </Box>
      {renderPatientDetailsDialog()}
    </Box>
  );
}

export default Card;
