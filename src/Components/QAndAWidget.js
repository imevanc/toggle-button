import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ThemeContext } from "../Context/ThemeContext";
import Typography from "@mui/material/Typography";
import CustomToggleButton from "./CustomToggleButton";

const QAndAWidget = (props) => {
  const ourTheme = React.useContext(ThemeContext);
  const [widgetColor, setWidgetColor] = React.useState(ourTheme.ourTheme.amber);
  const [solutionMessage, setSolutionMessage] = React.useState(
    "The answer is incorrect"
  );

  const [userSolutions, setUserSolutions] = React.useState(
    props.questionsAndAnswers.solutions.map((option) => {
      if (option === "option1") {
        return "option2";
      } else {
        return "option1";
      }
    })
  );

  React.useEffect(() => {
    const correctSolutions = props.questionsAndAnswers.solutions.filter(
      (option, idx) => option === userSolutions[idx]
    ).length;

    if (correctSolutions === props.questionsAndAnswers.solutions.length) {
      setWidgetColor(ourTheme.ourTheme.green);
      setSolutionMessage("The answer is correct!");
    } else if (
      correctSolutions >=
      props.questionsAndAnswers.solutions.length * 0.5
    ) {
      setWidgetColor(ourTheme.ourTheme.amber);
      setSolutionMessage("The answer is incorrect!");
    } else {
      setWidgetColor(ourTheme.ourTheme.red);
      setSolutionMessage("The answer is incorrect!");
    }
  }, [userSolutions]);

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
