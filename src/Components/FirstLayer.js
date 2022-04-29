import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const FirstLayer = () => {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        minWidth: "320px",
      }}
    >
      <Paper
        sx={{
          position: "relative",
          width: "1280px",
          height: "720px",
          background: "linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)",
        }}
      >
        <Typography component="h1" variant="h4" align="center">
          Question
        </Typography>
      </Paper>
    </Container>
  );
};

export default FirstLayer;
