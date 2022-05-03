import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

const CustomToggleButton = (props) => {
  const matches = useMediaQuery("(min-width:600px)");
  const [alignment, setAlignment] = React.useState("option1");

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
        {Object.keys(props.options).map((option, idx) => {
          return (
            <ToggleButton
              key={idx}
              value={option}
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
                  color: "#9F938B",
                  textTransform: "none",
                }}
              >
                {props.options[option]}
              </Typography>
            </ToggleButton>
          );
        })}
        {/* <ToggleButton
          value="option1"
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
              color: "#9F938B",
              textTransform: "none",
            }}
          >
            option1
          </Typography>
        </ToggleButton>
        <ToggleButton
          value="option2"
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
              color: "#9F938B",
              textTransform: "none",
            }}
          >
            option2
          </Typography>
        </ToggleButton> */}
      </ToggleButtonGroup>
    </Box>
  );
};

export default CustomToggleButton;
