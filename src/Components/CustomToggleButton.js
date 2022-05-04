import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

const CustomToggleButton = (props) => {
  const matches = useMediaQuery("(min-width:900px)");
  const [option, setOption] = React.useState("option1");
  const [fontColorOption, _] = React.useState({
    selectedOption: "#9F938B",
    nonSelectedOption: "#FFFFFF",
  });
  const handleOption = (_, newOption) => {
    if (newOption !== null) {
      setOption(newOption);
    }
  };
  return (
    <React.Fragment>
      <Box
        paddingTop={"20px"}
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          minWidth: "900px",
        }}
      >
        <ToggleButtonGroup
          value={option}
          exclusive
          onChange={handleOption}
          orientation={`${matches ? `horizontal` : `vertical`}`}
          sx={{
            display: "flex",
            justifyContent: "center",
            border: "2px solid #F9D29F",
            borderRadius: "100px",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          {Object.keys(props.options).map((iterOption, idx) => {
            const fontColor =
              iterOption !== option
                ? `${fontColorOption.selectedOption}`
                : `${fontColorOption.nonSelectedOption}`;
            return (
              <ToggleButton
                key={idx}
                value={iterOption}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "21px 157px",
                  background: "#F8CAA3",
                  borderRadius: "100px",
                  minWidth: "500px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    color: fontColor,
                    textTransform: "none",
                  }}
                >
                  {props.options[iterOption]}
                </Typography>
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Box>
      <Box
        paddingTop={"20px"}
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          minWidth: "288px",
        }}
      >
        <ToggleButtonGroup
          value={option}
          exclusive
          onChange={handleOption}
          orientation={`${matches ? `horizontal` : `vertical`}`}
          sx={{
            display: "flex",
            justifyContent: "center",
            border: "2px solid #F9D29F",
            borderRadius: "100px",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            minWidth: "288px",
          }}
        >
          {Object.keys(props.options).map((iterOption, idx) => {
            const fontColor =
              iterOption !== option
                ? `${fontColorOption.selectedOption}`
                : `${fontColorOption.nonSelectedOption}`;
            return (
              <ToggleButton
                key={idx}
                value={iterOption}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "21px 157px",
                  background: "#F8CAA3",
                  borderRadius: "100px",
                  maxWidth: "500px",
                  minWidth: "288px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    color: fontColor,
                    textTransform: "none",
                  }}
                >
                  {props.options[iterOption]}
                </Typography>
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Box>
    </React.Fragment>
  );
};

export default CustomToggleButton;
