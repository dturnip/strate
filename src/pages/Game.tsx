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
}

export default Tutorial;

/*
 * getMap(0) -> maxMoves = 2
 * getMap(1) -> maxMoves = 3
 */
