import { ThemeContext } from "./Context/ThemeContext";
import { ThemeProvider } from "@mui/material/styles";
import LinearColor from "./Components/LinearColor";
import QAndAWidget from "./Components/QAndAWidget";
import questionsAndAnswers from "./db/db.json";
import Theme from "./Context/TrafficLightTheme";

const App = () => {
  const ourTheme = Theme();
  return questionsAndAnswers.questionsAndAnswers.length ? (
    <ThemeContext.Provider value={{ ourTheme }}>
      <ThemeProvider theme={ourTheme}>
        <QAndAWidget
          questionsAndAnswers={questionsAndAnswers.questionsAndAnswers[1]}
        />
      </ThemeProvider>
    </ThemeContext.Provider>
  ) : (
    <LinearColor />
  );
};

export default App;
