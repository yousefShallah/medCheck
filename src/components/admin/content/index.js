import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./tab-panel";
import AdminHome from "../../../pages/admin/home";
import { Button, Grid } from "@mui/material";
import Logo from "../../../images/admin/Logo.png";
import Person2Icon from "@mui/icons-material/Person2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Settings from "../../../pages/admin/settings";
import Reports from "../../../pages/admin/reports";
import Patients from "../../../pages/admin/patients";
import Assistants from "../../../pages/admin/assistants";
import Pharmacises from "../../../pages/admin/pharmacises";
import DIN from "../../../pages/admin/DIN";
import Loading from "../../loading";
import { useNavigate } from "react-router-dom";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import DINImg from "./DIN.svg";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import "./index.scss";

function Content({ activePage, setActivePage }) {
  const navigate = useNavigate();

  return (
    <Box className="content-container">
      <Grid container columns={{ xs: 4, md: 12 }} className="grid-container">
        <Grid item xs={2}>
          <Box className="side-bar-box">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={activePage}
              onChange={(event, newValue) => {
                navigate(`/admin/${newValue}`);
                setActivePage(newValue);
              }}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#fff",
                },
              }}
            >
              <Box className="sidebar-logo">
                <img src={Logo} alt="Logo" />
              </Box>
              <Tab
                label="Dashboard"
                icon={<SpaceDashboardIcon />}
                iconPosition="start"
              />
              <Tab
                label="Patients"
                icon={<Person2Icon />}
                iconPosition="start"
              />
              <Tab
                label="Assistant"
                icon={<AccountCircleIcon />}
                iconPosition="start"
              />
              <Tab
                label="Pharmacists"
                icon={<AccountCircleIcon />}
                iconPosition="start"
              />
              <Tab
                label="Settings"
                icon={<SettingsIcon />}
                iconPosition="start"
              />
              <Tab
                label="Reports"
                icon={<ContentPasteIcon />}
                iconPosition="start"
              />
              <Tab
                label="DIN List"
                icon={<img src={DINImg} alt="img" className="din-icons" />}
                iconPosition="start"
              />
              <Box className="side-bar-barcode">
                <Button
                  variant="contained"
                  endIcon={<QrCode2Icon />}
                  className="barcode-button"
                  style={{
                    background: "#1D617A",
                    color: "#ffffff",
                    height: "40px",
                    width: "290px",
                    fontSize: "15px",
                  }}
                >
                  Scan barcode
                </Button>
              </Box>
            </Tabs>
          </Box>
        </Grid>
        {activePage ? (
          <Grid item xs={10}>
            <TabPanel value={activePage} index={1}>
              <AdminHome />
            </TabPanel>
            <TabPanel value={activePage} index={2}>
              <Patients />
            </TabPanel>
            <TabPanel value={activePage} index={3}>
              <Assistants />
            </TabPanel>
            <TabPanel value={activePage} index={4}>
              <Pharmacises />
            </TabPanel>
            <TabPanel value={activePage} index={5}>
              <Settings />
            </TabPanel>
            <TabPanel value={activePage} index={6}>
              <Reports />
            </TabPanel>
            <TabPanel value={activePage} index={7}>
              <DIN />
            </TabPanel>
          </Grid>
        ) : (
          <Loading />
        )}
      </Grid>
    </Box>
  );
}

export default Content;
