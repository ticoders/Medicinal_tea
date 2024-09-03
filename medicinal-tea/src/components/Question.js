
import React from 'react';
import './Question.css';

const Question = ({ question, handleAnswer }) => {
  return (
    <div className="Question">
      <p className="question-text">{question.text}</p>
      <div className="button-group">
        <button onClick={() => handleAnswer('Yes')} className="answer-button">Yes</button>
        <button onClick={() => handleAnswer('No')} className="answer-button">No</button>
      </div>
    
      <img src={`../tea/chamomileone.jpeg`} alt="Tea" className="question-image"/>
    </div>
  );
};

export default Question;





