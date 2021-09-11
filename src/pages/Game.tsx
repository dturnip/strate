import React, {useState, useEffect} from 'react';
import {GameBoard} from "../components/GameBoard";
import {Side} from "../components/Side";
import {getMeta} from "../lib/Maps";
import {Status} from "../types/aliases";
import "../styles/game/game.scss"
import {sGet, sSet} from "../lib/Storage";
import {objectiveCheck} from "../lib/LevelCheck";
import {AiFillQuestionCircle} from "react-icons/ai";
import {VscDebugRestart} from "react-icons/vsc";

const Tutorial = () => {
    const [points, setPoints] = useState<number>(0);
    const [moves, setMoves] = useState<number>(0);
    const [fail, setFail] = useState<boolean>(false);
    const [clear, setClear] = useState<boolean>(false);
    const [clickable, setClickable] = useState<boolean>(true);

    useEffect(() => {
        if (!sGet("level")) sSet("level")(0);
        if (!sGet("moves")) sSet("moves")(2);
        if (!sGet("retry")) sSet("retry")(false);
        setMoves(sGet("moves"));
        sSet("currStatus")(Status.ALIVE);
    }, []);

    const incrementLevel: () => void = () => {
        if (clickable) {
            setClickable(false);
            fadeOut();
            sSet("level")(parseInt(sGet("level")) + 1);
            sSet("points")(0);
            setPoints(0);
            sSet("moves")(getMeta(parseInt(sGet("level"))).moves);
            setMoves(sGet("moves"));
            sSet("currStatus")(Status.ALIVE);
            setTimeout(() => {
                setFail(false);
                setClear(false);
                setClickable(true);
            }, 400);
        }
    };

    const retryLevel: () => void = () => {
        if (clickable) {
            setClickable(false);
            fadeOut();
            sSet("points")(0);
            setPoints(0);
            sSet("moves")(getMeta(parseInt(sGet("level"))).moves);
            setMoves(sGet("moves"))
            sSet("currStatus")(Status.ALIVE);
            sSet("retry")(true);
            setTimeout(() => {
                setFail(false);
                setClear(false);
                setClickable(true);
            }, 500);
        }
    }

    const fadeIn: () => void = () => {
        const overlay: HTMLElement | null = document.getElementById("overlay");
        if (overlay && overlay.style.opacity < String(1)) {
            let opacity: number = 0;
            let fadeFx = setInterval(() => {
                if (opacity < 1) {
                    opacity += 0.04;
                    overlay.style.opacity = String(opacity);
                } else {
                    clearInterval(fadeFx);
                }
            }, 5);
        }
    }

    const fadeOut: () => void = () => {
        const overlay: HTMLElement | null = document.getElementById("overlay");
        if (overlay && overlay.style.opacity > String(0)) {
            let opacity: number = 1;
            let fadeOutFx = setInterval(() => {
                if (opacity > 0) {
                    opacity -= 0.04;
                    overlay.style.opacity = String(opacity);
                } else {
                    clearInterval(fadeOutFx);
                }
            }, 5);
        }
    }

    const translateX: (elem: HTMLElement | null, x: number) => void = (elem, x) => {
        if (elem) elem.style.transform = `translateX(${x}px)`;
    }

    const setTransitionSpeed: (elem: HTMLElement | null, x: number) => void = (elem, x) => {
        if (elem) elem.style.transition = `transform ${x}ms ease-in-out 25ms`;
    }

    const reveal: () => void = () => {
        setTransitionSpeed(document.getElementById("solution-overlay"), 600);
        translateX(document.getElementById("solution-overlay"), 400);
    }

    const hide: () => void = () => {
        setTransitionSpeed(document.getElementById("solution-overlay"), 0);
        translateX(document.getElementById("solution-overlay"), 0);
    }

    const handlePoints: (e: KeyboardEvent) => void = (e) => {
        if (points !== sGet("points")) {
            setPoints(sGet("points") || 0)
        }
        if (sGet("currStatus") === Status.ALIVE) {
            if (e.key === "ArrowUp" || e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "ArrowLeft") {
                if (moves > 0) {
                    setMoves(parseInt(sGet("moves")));
                }
                if (Number(sGet("moves")) < 0) {
                    sSet("moves")(0);
                    sSet("currStatus")(Status.FAIL);
                    setFail(true);
                    alert("Anticheat detected you tried to exceed the move limit! Please slow down your key presses");
                    fadeIn();
                }
                const status = objectiveCheck(parseInt(sGet("level")), parseInt(sGet("moves")));
                if (status === Status.CLEAR) {
                    hide();
                    setClear(true);
                    fadeIn();
                }
                if (status === Status.FAIL) {
                    hide();
                    setFail(true);
                    fadeIn();
                }
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
                <div id={"game-wrapper"}>
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
                <div id={"footer-wrapper"}>
                    <span id={"level-text"}>Level&nbsp;{String(parseInt(sGet("level")) + 1)
                        .replace("0", "O")
                    }</span>
                    <div id={"help-wrapper"}>
                        <VscDebugRestart id={"debug-retry"} style={{
                            fontSize: "2.9rem"
                        }} onClick={retryLevel} />
                        <AiFillQuestionCircle id={"question-circle"} style={{
                            fontSize: "2.9rem"
                        }} onClick={reveal} />
                        <span id={"solution"}>
                            {getMeta(parseInt(sGet("level"))).cheat}
                        </span>
                        <div id={"solution-overlay"} />
                    </div>
                </div>
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
