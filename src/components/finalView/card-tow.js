import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import "./index.scss";
import cardTwoPreview from "../../images/patient-card-two.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ErrorIcon from "@mui/icons-material/Error";

function Card() {
  const [openDetails, setOpenDetails] = useState(false);
  const [imageSize, setImageSize] = useState(500);
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
        value: "4",
      },
      {
        title: "Bedtime",
        value: "",
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
      >
        <DialogContent>
          <Box>
            <Box className="img">
              <img
                src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
                alt="img"
                width="400px"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "8px",
                  margin: ".5rem 0rem 1rem",
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
                margin="0px 0px 16px"
                fontSize="20px"
                fontWeight="bold"
              >
                Aspirin protect 100mg/tab(Acetylsalicylic Acid 100mg/tab)
              </Typography>
              {data.map((item) => {
                return (
                  <Box
                    display="flex"
                    align-items="center"
                    justify-content="flex-start"
                  >
                    <Typography
                      variant="span"
                      fontSize="16px"
                      color="#00000090"
                    >
                      {item.title}:
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize="16px"
                      color="#000000"
                      marginLeft=".5rem"
                    >
                      {item.value ? item.value : "--"}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box marginTop="16px" display="flex" align-items="center">
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
                      bgcolor="#00000005"
                      width="112px"
                      height="60px"
                      color="#00000099"
                      fontSize="16px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      marginBottom="8px"
                    >
                      <Typography fontSize="16px"> {item.title} </Typography>
                    </Box>
                    <Box
                      className="value"
                      style={{
                        background:
                          item.value && item.title !== "Total"
                            ? "#E8F5E9"
                            : item.title !== "Total"
                            ? "#FAFAFA"
                            : "#fff",
                      }}
                      bgcolor="#00000005"
                      width="112px"
                      height="60px"
                      color="#00000099"
                      fontSize="16px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      marginBottom="8px"
                    >
                      {item.title !== "Total" ? (
                        <Typography fontSize="16px">
                          {item.value ? item.value : "--"}
                        </Typography>
                      ) : (
                        <Typography
                          variant="h4"
                          color="#000"
                          fontSize="28px"
                          fontWeight="bold"
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
    <Box>
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
                    <Grid item xs={4.5}>
                      <Typography> Review Medicine </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Chip
                        label="MACH"
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
                      style={{ color: "#0000008F", fontSize: "20px" }}
                    />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Box height="62vh">
        <Box
          height="100%"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="24px 0px"
          position="relative"
        >
          <img
            src={cardTwoPreview}
            alt="img"
            width={imageSize}
            height={imageSize}
          />
          <Box
            position="absolute"
            top="40%"
            right="0px"
            display="flex"
            flexDirection="column"
          >
            <Box
              width="50px"
              height="50px"
              bgcolor="#f5f5f5"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{
                cursor: "pointer",
              }}
              onClick={() =>
                setImageSize(imageSize < 700 ? imageSize + 100 : imageSize)
              }
            >
              <AddIcon />
            </Box>
            <Box
              width="50px"
              height="50px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              margin="16px 0px"
              style={
                {
                  // cursor: "pointer",
                }
              }
            >
              <SearchIcon />
            </Box>
            <Box
              width="50px"
              height="50px"
              bgcolor="#f5f5f5"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{
                cursor: "pointer",
              }}
              onClick={() =>
                setImageSize(imageSize > 300 ? imageSize - 100 : imageSize)
              }
            >
              <RemoveIcon />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginTop="24px"
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
