import React, {useState, useEffect} from 'react';
import {GameBoard} from "../components/GameBoard";
import {Side} from "../components/Side";
import {getMap} from "../lib/Maps";
import "../styles/game/game.scss"

const Tutorial = () => {
    const [level, setLevel] = useState<number>(0);

    const incrementLevel = () => {
        setLevel(prev => prev + 1);
        console.log(level);
    };

    return (
    <>
        <div id={"master"}>
            {/*<h1 style={{textAlign: 'center'}}>&nbsp;</h1>*/}
            <div id={"game-wrapper"}>
                <GameBoard map={getMap(level)}/>
                <Side points={"0"} objective={"Get the 8 tile"} moves={"2"} />
            </div>
            {/*<GameBoard map={getMap(1)} />*/}
            <button onClick={incrementLevel}>Increment Level!</button>
        </div>
    </>
)
}

export default Tutorial;

/*
 * getMap(0) -> maxMoves = 2
 * getMap(1) -> maxMoves = 3
 */
