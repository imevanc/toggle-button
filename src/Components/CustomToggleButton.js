import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

const CustomToggleButton = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Box
      paddingTop={"20px"}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        orientation={`${matches ? `horizontal` : `vertical`}`}
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "2px solid #F9D29F",
          borderRadius: "100px",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
      >
        <ToggleButton
          value="left"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "21px 157px",
            background: "#F8CAA3",
            borderRadius: "100px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Mulish",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              fontColor: "#9F938B",
              textTransform: "none",
            }}
          >
            left
          </Typography>
        </ToggleButton>
        <ToggleButton
          value="center"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "21px 157px",
            background: "#F8CAA3",
            borderRadius: "100px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Mulish",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              fontColor: "#9F938B",
              textTransform: "none",
            }}
          >
            right
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default CustomToggleButton;
