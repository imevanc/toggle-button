import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleGroup = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (_, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={{
        position: "absolute",
        width: "900px",
        height: "80px",
        left: "190px",
        top: "179px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      }}
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="ios">IOS</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleGroup;
