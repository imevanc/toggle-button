import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ToggleGroup from "./ToggleGroup";

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
      <ToggleGroup />
      <ToggleGroup />
      <ToggleGroup />
      <ToggleGroup />
    </Container>
  );
};

export default FirstLayer;
