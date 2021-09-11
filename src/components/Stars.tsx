import React from 'react';
import "../styles/game/stars.scss";
import {StarProps} from "../types/interfaces";

export const Stars: React.FC<StarProps> = ({
    usedMoves,
    bestMoves,
    clear,
}) => {
    return (
        <div id={"stars-stat"}>
            {!clear ?
                (
                    <>
                        <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star gray"} />
                        <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star gray"} />
                        <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star gray"} />
                    </>
                )
                : usedMoves <= bestMoves ?
                    (
                        <>
                            <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star"} />
                            <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star"} />
                            <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star"} />
                        </>
                    )
                    : usedMoves === bestMoves + 1 ?
                        (
                            <>
                                <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star"} />
                                <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star"} />
                                <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star gray"} />
                            </>
                        )
                        : (
                            <>
                                <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star"} />
                                <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star gray"} />
                                <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt={"star"} className={"star gray"} />
                            </>
                        )
            }
        </div>
    );
}
