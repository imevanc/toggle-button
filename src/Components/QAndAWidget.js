import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import CustomToggleButton from "./CustomToggleButton";

const QAndAWidget = (props) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)",
      }}
    >
      <Box
        sx={{
          paddingBottom: "20px",
          flexGrow: 1,
          flexDirection: "column",
          display: { xs: "flex", md: "flex" },
        }}
      >
        <Typography
          paddingTop="20px"
          align="center"
          sx={{
            fontFamily: "Mulish",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            color: "#FFFFFF",
            textTransform: "none",
          }}
        >
          {props.questionsAndAnswers.question}
        </Typography>

        {props.questionsAndAnswers.answers.map((options, idx) => (
          <CustomToggleButton key={idx} options={options} />
        ))}
      </Box>
    </Container>
  );
};

export default QAndAWidget;
