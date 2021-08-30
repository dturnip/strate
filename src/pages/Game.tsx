import React, { useState, useEffect } from 'react';
import { GameBoard } from "../components/GameBoard";
import { getMap } from "../lib/Maps";

const Tutorial = () => {
	const [level, setLevel] = useState<number>(0);

	const incrementLevel = () => {
		setLevel(prev => prev + 1);
		console.log(level);
	};

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Game</h1>
            <GameBoard map={getMap(level)} />
			{/*<GameBoard map={getMap(1)} />*/}
			<button onClick={incrementLevel}>Incremenet Level!</button>
        </>
    )
}

export default Tutorial;

/*
 * getMap(0) -> maxMoves = 2
 * getMap(1) -> maxMoves = 3
 */
