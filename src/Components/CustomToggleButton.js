import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

const CustomToggleButton = (props) => {
  const matches = useMediaQuery("(min-width:900px)");
  const [option, setOption] = React.useState(props.userSolutions[props.idx]);

  const handleOption = (_, newOption) => {
    if (newOption !== null) {
      setOption(newOption);
      const newUserSolutions = [...props.userSolutions].map((solution, idx) => {
        if (idx === props.idx) {
          if (option === "option1") {
            return "option2";
          } else {
            return "option1";
          }
        } else {
          return solution;
        }
      });
      props.setUserSolutions(newUserSolutions);
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
            border: `${props.widgetColor.border}`,
            borderRadius: "100px",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          {Object.keys(props.options).map((iterOption, idx) => {
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
                  color: "#FFFFFF",
                  "&.MuiToggleButtonGroup-grouped": {
                    borderRadius: "100px !important",
                    border: "1px solid lightgrey !important",
                  },
                  "&.Mui-selected, &.Mui-selected:hover": {
                    color: `${props.widgetColor.color}`,
                    backgroundColor: `${props.widgetColor.background}`,
                  },
                  minWidth: "500px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
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
          minWidth: "200px",
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
            border: `${props.widgetColor.border}`,
            borderRadius: "24px",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            minWidth: "200px",
          }}
        >
          {Object.keys(props.options).map((iterOption, idx) => {
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
                  color: "#FFFFFF",
                  "&.MuiToggleButtonGroup-grouped": {
                    borderRadius: "24px !important",
                    border: "1px solid lightgrey !important",
                  },
                  "&.Mui-selected, &.Mui-selected:hover": {
                    color: `${props.widgetColor.color}`,
                    background: `${props.widgetColor.background}`,
                  },
                  maxWidth: "500px",
                  minWidth: "200px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
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
