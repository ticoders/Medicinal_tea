import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import './App.css';
 

const questions = [
  { id: 1, text: "Feeling a bit under the weather?" },
  { id: 2, text: "Got a stuffy nose?" },
  { id: 3, text: "Is your throat feeling scratchy?" },
  { id: 4, text: "Are you dealing with headaches?" },
  { id: 5, text: "Feeling extra tired lately?" },
  { id: 6, text: "Got any tummy troubles?" },
  { id: 7, text: "Do you have any sneezing fits?" },
  { id: 8, text: "Are you feeling unusually anxious?" },
  { id: 9, text: "Do you have trouble sleeping?" },
  { id: 10, text: "Are you feeling a bit moody?" }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questions[currentQuestion].id]: answer
    }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>What Medicinal Drink Do You Need? 🍵</h1>
        <p className="instructions">Answer the following questions to discover the best medicinal tea for you. Feel free to mix the teas for a medicinal drink.</p>
        <p className="disclaimer">This quiz is simply a suggestion and not medical advice. Consult a healthcare professional for any health issues.</p>
        {!submitted ? (
          <Question
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        ) : (
          <>
            <Result answers={answers} />
            <button onClick={handleRestart} className="restart-button">Take the Quiz Again</button>
          </>
        )}
      </header>
      <footer className="footer">
        <p>Copyright Tea Idiong (they/he)</p>
      </footer>
    </div>
  );
};

export default App;

