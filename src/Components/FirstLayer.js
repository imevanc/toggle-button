import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import CustomToggleButton from "./CustomToggleButton";

const FirstLayer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)",
        maxWidth: "1280px",
        maxHeight: "720px",
      }}
    >
      <Typography component="h1" variant="h4" align="center">
        Question
      </Typography>
      <Box sx={{ paddingBottom: "20px" }}>
        <CustomToggleButton />
        <CustomToggleButton />
        <CustomToggleButton />
        <CustomToggleButton />
      </Box>
    </Container>
  );
};

export default FirstLayer;
