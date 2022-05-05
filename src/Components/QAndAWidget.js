import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ThemeContext } from "../Context/ThemeContext";
import Typography from "@mui/material/Typography";
import CustomToggleButton from "./CustomToggleButton";

const QAndAWidget = (props) => {
  const ourTheme = React.useContext(ThemeContext);
  const [widgetColor, setWidgetColor] = React.useState(ourTheme.ourTheme.amber);
  console.log(widgetColor);

  const [solutionMessage, setSolutionMessage] = React.useState("");
  // TODO: work on the code below
  // const [userSolutions, setUserSolutions] = React.useState(
  //   props.questionsAndAnswers.solutions.map((option) => {
  //     if (option === "option1") {
  //       return "option2";
  //     } else {
  //       return "option1";
  //     }
  //   })
  // );
  const [userSolutions, setUserSolutions] = React.useState([
    "option2",
    "option2",
    "option2",
    "option2",
  ]);
  const correctSolutions = props.questionsAndAnswers.solutions.filter(
    (option, idx) => option === userSolutions[idx]
  ).length;

  if (correctSolutions === props.questionsAndAnswers.solutions.length) {
    // console.log("success");
    // setWidgetColor(ourTheme.ourTheme.green.main);
    // setSolutionMessage("The answer is correct!");
  } //else if (
  //   correctSolutions >=
  //   props.questionsAndAnswers.solutions.length * 0.5
  // ) {
  //   setWidgetColor(() => {
  //     setWidgetColor(ourTheme.ourTheme.amber.main);
  //   });
  //   // setSolutionMessage("The answer is incorrect!");
  // } else {
  //   setWidgetColor(() => {
  //     setWidgetColor(ourTheme.ourTheme.red.main);
  //   });
  //   // setSolutionMessage("The answer is incorrect!");
  // }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: `${widgetColor.main}`,
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
          <CustomToggleButton
            key={idx}
            options={options}
            idx={idx}
            userSolutions={userSolutions}
            setUserSolutions={setUserSolutions}
            widgetColor={widgetColor}
          />
        ))}
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
          {solutionMessage}
        </Typography>
      </Box>
    </Container>
  );
};

export default QAndAWidget;
