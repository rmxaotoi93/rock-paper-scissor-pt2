import logo from './logo.svg';
import ChoiceCard from "./components/ChoiceCard";
import React, { useState } from "react";

import { CHOICES, getRoundOutcome } from "./utils/index"
import ChoiceButton from "./components/ChoiceButton"
import './App.css';


function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  const [prompt, setGamePrompt] = useState("Start !!!");
  const onPlayerChoose = playerChoice => {
  const [result, compChoice] = getRoundOutcome(playerChoice);

  const newUserChoice = CHOICES[playerChoice];
  const newComputerChoice = CHOICES[compChoice];
  setPlayerChoice(newUserChoice);
  setComputerChoice(newComputerChoice);

  setGamePrompt(result)


  gameHistory.push(result);
  setGameHistory(gameHistory);
  if (result === "Victory!") {
    setPreviousWinner("You");
  } else if (result === "Defeat!") {
    setPreviousWinner("Computer");
  } else {
    setPreviousWinner("Tie");
  }
};

  return (

    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard title="Computer"
              previousWinner={previousWinner}
              imgURL={computerChoice && computerChoice.url} />
            <h1>{prompt}</h1>
            <ChoiceButton onPlayerChoose={onPlayerChoose} />
            <ChoiceCard title="You"
              previousWinner={previousWinner}
              imgURL={playerChoice && playerChoice.url} />
          </div>
          <div className="col-md-4 themed-grid-col">
            <h3>History</h3>
            <ul>
              {gameHistory.map(result => {
                return <li>{result}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
