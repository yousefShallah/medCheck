import Box from "@mui/material/Box";

function TabPanelComponent(props) {
  const { children, value, index } = props;

  return value === index && <Box style={{ height: "100%" }}>{children}</Box>;
}

export default TabPanelComponent;
