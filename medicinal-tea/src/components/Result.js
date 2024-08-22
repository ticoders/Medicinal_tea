
import React from 'react';
import './Result.css';  

const teaOptions = {
  gingerTea: { name: "Ginger Tea", description: "Ginger tea can help soothe a sore throat and aid digestion.", points: 0 },
  peppermintTea: { name: "Peppermint Tea", description: "Peppermint tea is great for relieving congestion and digestive issues.", points: 0 },
  chamomileTea: { name: "Chamomile Tea", description: "Chamomile tea is known for its calming effects and helps with sleep.", points: 0 },
  lemonTea: { name: "Lemon Tea", description: "Lemon tea can help boost your immune system and is good for sore throats.", points: 0 },
  turmericTea: { name: "Turmeric Tea", description: "Turmeric tea has anti-inflammatory properties and can aid in overall wellness.", points: 0 },
  honeyTea: { name: "Honey Tea", description: "Honey tea is soothing for sore throats and coughs.", points: 0 },
  greenTea: { name: "Green Tea", description: "Green tea is rich in antioxidants and supports overall health.", points: 0 },
  hibiscusTea: { name: "Hibiscus Tea", description: "Hibiscus tea is known for its tart flavor and can help with high blood pressure.", points: 0 },
  rooibosTea: { name: "Rooibos Tea", description: "Rooibos tea is caffeine-free and helps with relaxation.", points: 0 },
  echinaceaTea: { name: "Echinacea Tea", description: "Echinacea tea is used to boost the immune system and fight off colds.", points: 0 },
   
};

const questionScores = {
  1: { gingerTea: 1, peppermintTea: 1, chamomileTea: 1, lemonTea: 1, turmericTea: 1, honeyTea: 1, greenTea: 1, hibiscusTea: 1, rooibosTea: 1, echinaceaTea: 1 },
  2: { gingerTea: 1, peppermintTea: 1, lemonTea: 1, turmericTea: 1, honeyTea: 1 },
  3: { peppermintTea: 1, chamomileTea: 1, greenTea: 1, hibiscusTea: 1 },
  4: { gingerTea: 1, lemonTea: 1, honeyTea: 1, echinaceaTea: 1 },
  5: { chamomileTea: 1, turmericTea: 1, rooibosTea: 1, greenTea: 1 },
  6: { gingerTea: 1, peppermintTea: 1, greenTea: 1, rooibosTea: 1 },
  7: { peppermintTea: 1, chamomileTea: 1, honeyTea: 1, lemonTea: 1 },
  8: { gingerTea: 1, honeyTea: 1, lemonTea: 1, echinaceaTea: 1 },
  9: { gingerTea: 1, turmericTea: 1, chamomileTea: 1, rooibosTea: 1 },
  10: { gingerTea: 1, peppermintTea: 1, honeyTea: 1, echinaceaTea: 1 },
};

const Result = ({ answers }) => {
  const scores = { ...teaOptions };

  for (const [questionId, answer] of Object.entries(answers)) {
    if (answer === 'Yes') {
      const questionScore = questionScores[questionId];
      for (const [tea, points] of Object.entries(questionScore)) {
        scores[tea].points += points;
      }
    }
  }

  const sortedTeas = Object.entries(scores)
    .sort(([, a], [, b]) => b.points - a.points)
    .slice(0, 3);

  return (
    <div className="Result">
      <h2>Top Tea Recommendations:</h2>
      <ul>
        {sortedTeas.map(([key, { name, description, points }]) => (
          <li key={key}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Score: {points}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
