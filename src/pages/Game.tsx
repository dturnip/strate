import React, {useState, useEffect} from 'react';
import {GameBoard} from "../components/GameBoard";
import {Side} from "../components/Side";
import {getMap} from "../lib/Maps";
import {NNA} from "../types/aliases";
import "../styles/game/game.scss"
import {morphDown, morphLeft, morphRight, morphUp} from "../lib/GridLogic";
import {lGet, sGet, lSet, sSet} from "../lib/Storage";

const Tutorial = () => {
    const [level, setLevel] = useState<number>(0);
    const [points, setPoints] = useState<number>(0);
    const [objective, setObjective] = useState<string>("");
    const [moves, setMoves] = useState<number>(0);

    const incrementLevel = () => {
        setLevel(prev => prev + 1);
        sSet("points")(0);
        setPoints(0);
        console.log(level);
    };

    return (
        <>
            <div id={"master"}>
                <h1 style={{textAlign: 'center'}}>Map[{level}]</h1>
                <div id={"game-wrapper"}>
                    <GameBoard map={getMap(level)}/>
                    <Side points={points.toString()} objective={"Get the 8 tile"} moves={"2"} />
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
