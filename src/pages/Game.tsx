import React, {useState, useEffect} from 'react';
import {GameBoard} from "../components/GameBoard";
import {Side} from "../components/Side";
import {getMap} from "../lib/Maps";
import {getMeta} from "../lib/Maps";
import {NNA} from "../types/aliases";
import "../styles/game/game.scss"
import {morphDown, morphLeft, morphRight, morphUp} from "../lib/GridLogic";
import {lGet, sGet, lSet, sSet} from "../lib/Storage";

const Tutorial = () => {
    const [level, setLevel] = useState<number>(0);
    const [points, setPoints] = useState<number>(0);
    const [moves, setMoves] = useState<number>(0);
    const [fail, setFail] = useState<boolean>(false);
    const [clear, setClear] = useState<boolean>(false);

    useEffect(() => {
        if (!sGet("moves")) sSet("moves")(2);
        setMoves(sGet("moves"));
    }, []);

    const incrementLevel = () => {
        setLevel(prevState => prevState + 1);
        sSet("points")(0);
        setPoints(0);
        sSet("moves")(getMeta(level + 1).moves);
        setMoves(sGet("moves"));
        setFail(false);
        setClear(false);
    };

    const handlePoints = (e: KeyboardEvent) => {
        if (points !== sGet("points")) {
            setPoints(sGet("points") || 0)
        }
        if (e.key === "ArrowUp" || e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "ArrowLeft") {
            if (moves > 0) {
                setMoves(parseInt(sGet("moves")));
            }
            alert(moves - 1)
        }
    }

    useEffect(() => {
        document.addEventListener("keyup", handlePoints);
        return () => {
            document.removeEventListener("keyup", handlePoints);
        }
    })

    useEffect(() => {
        const uc = document.getElementById("ui-container");
        if (uc !== null) {
            if (clear) {
                uc.style.boxShadow = "1px 1px 200px 1px #A3FECA";
            }
            if (fail) {
                uc.style.boxShadow = "1px 1px 200px 1px #FEAAA3";
            }
        }
    }, [clear, fail]);

    window.onunload = () => sessionStorage.clear();

    return (
        <>
            <div id={"master"}>
                <h1 style={{textAlign: 'center'}}>Map[{level}]</h1>
                <div id={"game-wrapper"}>
                    <GameBoard map={getMap(level)}/>
                    <Side points={points.toString()}
                          objective={getMeta(level).objective}
                          moves={moves.toString()}
                    />
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
