import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DrawerCard from "../../../components/admin/shared/drawer/drawerCard";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function AssistantDetails() {
  const [drawerAction, setDrawerAction] = useState("");
  const [open, setOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState("");

  const handleClickOpenDialog = (action) => {
    setOpen(true);
    setDialogAction(action);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setDialogAction("");
  };
  // RestPassword
  // Deactivate
  // Delete
  const renderRestPasswordCard = () => {
    return (
      <Box width="450px">
        <DialogContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box padding="8px 0px">
              <Typography
                variant="h5"
                fontSize="14px"
                fontWeight="500"
                color="#00000061"
                marginBottom="8px"
              >
                New Password
              </Typography>
              <Typography
                variant="h5"
                fontSize="24px"
                fontWeight="600"
                color="#000000DE"
              >
                5A35B5DF0
              </Typography>
            </Box>
            <ContentCopyIcon
              style={{
                fontSize: "24px",
                color: "#0000008F",
                cursor: "pointer",
              }}
              onClick={() => navigator.clipboard.writeText("5A35B5DF0")}
            />
          </Box>
          <Divider />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            style={{
              color: "#1D617A",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Box>
    );
  };
  const renderCheckDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {dialogAction !== "RestPassword" ? (
          <Box width="450px">
            <DialogTitle id="alert-dialog-title">
              {dialogAction === "Deactivate"
                ? "Deactivate Account"
                : dialogAction === "Delete"
                ? "Delete Account"
                : ""}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {dialogAction === "Deactivate"
                  ? "Are you sure you want to Deactivate this Account!"
                  : dialogAction === "Delete"
                  ? "Are you sure you want to delete this Account!"
                  : ""}
              </DialogContentText>
            </DialogContent>
            {dialogAction === "Deactivate" ? (
              <DialogActions>
                <Button
                  onClick={handleCloseDialog}
                  style={{
                    color: "#00000099",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Close
                </Button>
                <Button
                  onClick={handleCloseDialog}
                  autoFocus
                  style={{
                    color: "#D32F2F",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Deactivate
                </Button>
              </DialogActions>
            ) : dialogAction === "Delete" ? (
              <DialogActions>
                <Button
                  onClick={handleCloseDialog}
                  style={{
                    color: "#00000099",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Close
                </Button>
                <Button
                  onClick={handleCloseDialog}
                  autoFocus
                  style={{
                    color: "#D32F2F",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Delete
                </Button>
              </DialogActions>
            ) : (
              ""
            )}
          </Box>
        ) : (
          renderRestPasswordCard()
        )}
      </Dialog>
    );
  };

  return (
    <Box>
      <Box>
        <Card
          style={{
            margin: "16px",
            padding: "0px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderRadius: "16px",
            height: "125px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            alt="img"
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
          <Box
            marginLeft="16px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="h4" fontSize="24px" fontWeight="600">
              Courtney Henry
            </Typography>
            <Typography
              variant="h6"
              fontSize="16px"
              fontWeight="500"
              borderRadius="4px"
              padding="8px"
              width="140px"
              marginTop="16px"
              color="#00000099"
            >
              jackson.graham@example.com
            </Typography>
          </Box>
        </Card>
      </Box>
      <Box>
        <Card
          style={{
            margin: "16px",
            padding: "16px 16px 0px",
            borderRadius: "16px",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              fontSize="20px"
              color="#00000099"
              fontWeight="400"
              margin="8px 0px 0px"
            >
              Details
            </Typography>
          </Box>
          <Box padding="16px 0px">
            <Box>
              <Typography
                variant="h5"
                fontSize="14px"
                color="#00000061"
                fontWeight="400"
                margin="8px 0px 0px"
              >
                ID
              </Typography>
              <Typography
                variant="h6"
                fontSize="18px"
                color="#000000DE"
                fontWeight="400"
                margin="4px 0px 8px"
              >
                4152
              </Typography>
              <Divider />
            </Box>
            {/* 2 */}
            <Box>
              <Typography
                variant="h5"
                fontSize="14px"
                color="#00000061"
                fontWeight="400"
                margin="8px 0px 0px"
              >
                User Name
              </Typography>
              <Typography
                variant="h6"
                fontSize="18px"
                color="#000000DE"
                fontWeight="400"
                margin="4px 0px 8px"
              >
                @courtney-henry25
              </Typography>
              <Divider />
            </Box>
            {/* 3 */}
            <Box>
              <Typography
                variant="h5"
                fontSize="14px"
                color="#00000061"
                fontWeight="400"
                margin="8px 0px 0px"
              >
                Address
              </Typography>
              <Typography
                variant="h6"
                fontSize="18px"
                color="#000000DE"
                fontWeight="400"
                margin="4px 0px 8px"
              >
                112 Forest Rd New York V2P 2N6
              </Typography>
              <Divider />
            </Box>
            {/* 4 */}
            <Box>
              <Typography
                variant="h5"
                fontSize="14px"
                color="#00000061"
                fontWeight="400"
                margin="8px 0px 0px"
              >
                Phone Number
              </Typography>
              <Typography
                variant="h6"
                fontSize="18px"
                color="#000000DE"
                fontWeight="400"
                margin="4px 0px 0px"
              >
                604-402-3100
              </Typography>
            </Box>
            {/* end */}
          </Box>
        </Card>
      </Box>
      <Box>
        <Card
          style={{
            margin: "16px",
            padding: "16px",
            borderRadius: "16px",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h5"
              fontSize="20px"
              color="#00000099"
              fontWeight="400"
              margin="8px 0px 0px"
            >
              Note
            </Typography>
            <ModeEditIcon
              style={{
                fontSize: "20px",
                color: "#1D617A",
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="h5"
              fontSize="16px"
              color="#00000099"
              fontWeight="400"
              margin="16px 0px 8px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Typography>
            <Typography
              variant="h5"
              fontSize="14px"
              color="#00000061"
              fontWeight="400"
            >
              Last Modified: 15 June, 2023
            </Typography>
          </Box>
        </Card>
      </Box>
      {/* ..... */}
      <Box>
        <Card
          style={{
            margin: "16px",
            padding: "16px 16px 0px",
            borderRadius: "16px",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              fontSize="20px"
              color="#00000099"
              fontWeight="400"
              margin="8px 0px 0px"
            >
              Setting
            </Typography>
          </Box>
          <Box padding="16px 0px">
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              height="50px"
              style={{
                cursor: "pointer",
              }}
              onClick={() => setDrawerAction("EditPharmacise")}
            >
              <EditIcon
                style={{
                  fontSize: "24px",
                  color: "#00000061",
                }}
              />
              <Typography
                variant="h6"
                fontSize="16px"
                color="#000000DE"
                fontWeight="400"
                margin="0px 10px"
              >
                Edit Profile
              </Typography>
            </Box>
            <Divider />
            {/* 2 */}
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              height="50px"
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleClickOpenDialog("RestPassword")}
            >
              <LockIcon
                style={{
                  fontSize: "24px",
                  color: "#00000061",
                }}
              />
              <Typography
                variant="h6"
                fontSize="18px"
                color="#000000DE"
                fontWeight="400"
                margin="0px 10px"
              >
                Rest Password
              </Typography>
            </Box>
            <Divider />

            {/*  */}
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              height="50px"
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleClickOpenDialog("Deactivate")}
            >
              <ReportProblemIcon
                style={{
                  fontSize: "24px",
                  color: "#00000061",
                }}
              />
              <Typography
                variant="h6"
                fontSize="18px"
                color="#000000DE"
                fontWeight="400"
                margin="0px 10px"
              >
                Deactivate Account
              </Typography>
            </Box>
            <Divider />
            {/*  */}
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              height="50px"
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleClickOpenDialog("Delete")}
            >
              <DeleteIcon
                style={{
                  fontSize: "24px",
                  color: "#C62828",
                }}
              />
              <Typography
                variant="h6"
                fontSize="18px"
                color="#C62828"
                fontWeight="400"
                margin="0px 10px"
              >
                Delete Account
              </Typography>
            </Box>
            {/* end */}
          </Box>
        </Card>
      </Box>
      {drawerAction && (
        <DrawerCard
          action={drawerAction}
          setDrawerAction={(action) => setDrawerAction(action)}
        />
      )}
      {renderCheckDialog()}
    </Box>
  );
}

export default AssistantDetails;
