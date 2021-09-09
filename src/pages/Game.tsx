import React, {useState, useEffect} from 'react';
import {GameBoard} from "../components/GameBoard";
import {Side} from "../components/Side";
import {getMap} from "../lib/Maps";
import {getMeta} from "../lib/Maps";
import {NNA, Status} from "../types/aliases";
import "../styles/game/game.scss"
import {morphDown, morphLeft, morphRight, morphUp} from "../lib/GridLogic";
import {lGet, sGet, lSet, sSet} from "../lib/Storage";
import {objectiveCheck} from "../lib/LevelCheck";

const Tutorial = () => {
    const [points, setPoints] = useState<number>(0);
    const [moves, setMoves] = useState<number>(0);
    const [fail, setFail] = useState<boolean>(false);
    const [clear, setClear] = useState<boolean>(false);

    useEffect(() => {
        if (!sGet("level")) sSet("level")(0);
        if (!sGet("moves")) sSet("moves")(2);
        if (!sGet("retry")) sSet("retry")(false);
        setMoves(sGet("moves"));
        sSet("currStatus")(Status.ALIVE);
    }, []);

    const incrementLevel: () => void = () => {
        sSet("level")(parseInt(sGet("level")) + 1)
        sSet("points")(0);
        setPoints(0);
        sSet("moves")(getMeta(parseInt(sGet("level"))).moves);
        setMoves(sGet("moves"));
        setFail(false);
        setClear(false);
        sSet("currStatus")(Status.ALIVE);
    };

    const retryLevel: () => void = () => {
        sSet("points")(0);
        setPoints(0);
        sSet("moves")(getMeta(parseInt(sGet("level"))).moves);
        setMoves(sGet("moves"))
        sSet("currStatus")(Status.ALIVE);
        sSet("retry")(true);
        setFail(false);
        setClear(false);
    const fadeIn: () => void = () => {
        const overlay: HTMLElement | null = document.getElementById("overlay");
        if (!overlay) alert("Oops there was an Error");
        if (overlay && overlay.style.opacity < String(1)) {
            let opacity: number = 0;
            let fadeFx = setInterval(() => {
                if (opacity < 1) {
                    opacity += 0.01;
                    overlay.style.opacity = String(opacity);
                } else {
                    clearInterval(fadeFx);
                }
            }, 4);
        }
    }

    const fadeOut: () => void = () => {
        const overlay: HTMLElement | null = document.getElementById("overlay");
        if (overlay && overlay.style.opacity > String(0)) {
            let opacity: number = 1;
            let fadeOutFx = setInterval(() => {
                if (opacity > 0) {
                    console.log(overlay.style.opacity);
                    opacity -= 0.01;
                    overlay.style.opacity = String(opacity);
                } else {
                    clearInterval(fadeOutFx);
                }
            }, 4);
        }
    }

    const handlePoints: (e: KeyboardEvent) => void = (e) => {
        if (points !== sGet("points")) {
            setPoints(sGet("points") || 0)
        }
        if (e.key === "ArrowUp" || e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "ArrowLeft") {
            const overlay: HTMLElement | null = document.getElementById("overlay");
            if (moves > 0) {
                setMoves(parseInt(sGet("moves")));
            }
            const status = objectiveCheck(parseInt(sGet("level")), moves - 1);
            if (status === Status.CLEAR) {
                setClear(true);
                fadeIn();
            }
            if (status === Status.FAIL) {
                setFail(true);
                fadeIn();
            }
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

    window.onunload = () => {
        sessionStorage.clear();
        sSet("level")(0);
    }

    return (
        <>
            <div id={"master"}>
                <h1 style={{textAlign: 'center'}}>Map[{sGet("level")}]</h1>
                <div id={"game-wrapper"}>
                    {/*<GameBoard map={getMap(parseInt(sGet("level")))}/>*/}
                    <GameBoard map={parseInt(sGet("level"))} retry={sGet("retry") === "true"} />
                    <Side
                        points={points
                        .toString()
                        .replace("0", "O")
                    }
                        objective={getMeta(parseInt(sGet("level"))).objective}
                        moves={moves
                              .toString()
                              .replace("0", "O")
                          }
                    />
                </div>
                {/*<GameBoard map={getMap(1)} />*/}
            </div>
            {clear !== fail &&
            <div id={"overlay"}>
                <div id={"ui-container"}>
                    <span id={"message"}>Level {(parseInt(sGet("level")) + 1)
                        .toString()
                        .replace("0", "O")} {fail
                        ? "Failed"
                        : clear
                            ? "Cleared"
                            : "Oops there was an Error"
                    }</span>
                    <div id={"stat"}>
                        <span id={"points-stat"}>
                            Points: {points
                            .toString()
                            .replace("0", "O")
                        }</span>
                        <br />
                        <span id={"moves-stat"}>
                            Moves Used: {
                                `${getMeta(parseInt(sGet("level"))).moves - 
                                parseInt(sGet("moves"))}/${getMeta(sGet("level")).moves}`
                                    .replace("0", "O")
                            }
                        </span>
                    </div>
                    {clear ?
                        (<div id={"button-container"}>
                            <div id={"retry-button"} onClick={retryLevel}>
                                <span id={"retry-text"}>Retry</span>
                            </div>
                            <div id={"next-button"} onClick={incrementLevel}>
                                <span id={"next-text"}>Next</span>
                            </div>
                        </div>)
                        :
                        (<div id={"button-container"}>
                                <div id={"retry-button"} onClick={retryLevel}>
                                    <span id={"retry-text"}>Retry</span>
                                </div>
                        </div>)
                    }
                </div>
            </div>
            }
        </>
    )
}

export default Tutorial;

/*
 * getMap(0) -> maxMoves = 2
 * getMap(1) -> maxMoves = 3
 */
