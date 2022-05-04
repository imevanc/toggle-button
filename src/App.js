import QAndAWidget from "./Components/QAndAWidget";
import questionsAndAnswers from "./db/db.json";
import LinearColor from "./Components/LinearColor";

const App = () => {
  return questionsAndAnswers.questionsAndAnswers.length ? (
    <QAndAWidget
      questionsAndAnswers={questionsAndAnswers.questionsAndAnswers[0]}
    />
  ) : (
    <LinearColor />
  );
};

export default App;
