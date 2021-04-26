import React, { useState } from 'react';
import Board from './Board';
import { checkForWinner } from './../calculate.js';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [baconIsNext, setBaconIsNext] = useState(true);
    const winner = checkForWinner(history[stepNumber]);
    const baconEggs = baconIsNext ? "bacon" : "eggs";
    // const [baconTally, setBaconTally] = useState(0);
    // const [eggTally, setEggTally] = useState(0);

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber+1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if(winner || squares[i]) return;
        squares[i] = baconEggs;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setBaconIsNext(!baconIsNext);
    }

    const startNewGame = () => {
        setHistory([Array(9).fill(null)]);
        setStepNumber(0);
        setBaconIsNext(true);
    }


    return (
        <React.Fragment>
            <h1>Bacon and Eggs - Tic Tac Toe</h1>
            {/* <h4>Bacon : {baconTally}</h4>
            <h4>Eggs: {eggTally}</h4> */}
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <h3>{ winner ? "Winner: " + winner : "Next Player: " + baconEggs }</h3>
            <button className="restart" onClick={startNewGame}>Start New Game</button>
        </React.Fragment>
    )

};

export default Game;