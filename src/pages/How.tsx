import React from 'react';
import {Route} from "react-router-dom";

const How = () => {
    return (
        <>
            <div id={"center-flex"}>
                <div id={"master-flex-wrap"}>
                    <section id={"control-sect"} className={"sect"}>
                        <div id={"control-img-wrapper"} className={"img-wrap"}>
                            <img src={`${process.env.PUBLIC_URL}/assets/how/gridHEIGHT500.png`} alt={"control"} id={"how-control"} className={"img"}/>
                        </div>
                        <div id={"control-text-wrapper"} className={"text-wrap"}>
                            <span id={"control-head"} className={"head"}>Controls</span>
                            <span id={"control-body"} className={"body"}>Game mechanics are familiar and inspired by 2048. Only identical tiles can merge. Arrow keys are used to move the tiles.</span>
                        </div>
                    </section>
                    <hr />
                    <section id={"flow-sect"} className={"sect"}>
                        <div id={"flow-text-wrapper"} className={"text-wrap"}>
                            <span id={"flow-head"} className={"head"}>Game Flow</span>
                            <span id={"flow-body"} className={"body"}>When two identical tiles become merged, the new merged tile gets added to the points score.<br /><br />Each level has an objective which must be cleared within a certain amount of moves in order to move on to the next.</span>
                        </div>
                        <div id={"flow-img-wrapper"} className={"img-wrap"}>
                            <img src={`${process.env.PUBLIC_URL}/assets/how/pointsHEIGHT500.png`} alt={"flow"} id={"how-flow"} className={"img"}/>
                        </div>
                    </section>
                    <hr />
                    <section id={"utils-sect"} className={"sect"}>
                        <div id={"utils-img-wrapper"} className={"img-wrap"}>
                            <img src={`${process.env.PUBLIC_URL}/assets/how/utilsHEIGHT200.png`} alt={"utils"} id={"how-utils"} className={"img"}/>
                        </div>
                        <div id={"utils-text-wrapper"} className={"text-wrap"}>
                            <span id={"utils-head"} className={"head"}>Utils</span>
                            <span id={"utils-body"} className={"body"}>When stuck on a level, pressing the question mark button will reveal the solution. The arrows revealed correspond to which arrow key to press.<br /><br />The retry button will reset the current level.</span>
                        </div>
                    </section>
                    <hr />
                    <section id={"stars-sect"} className={"sect"}>
                        <div id={"stars-text-wrapper"} className={"text-wrap"}>
                            <span id={"stars-head"} className={"head"}>Stars</span>
                            <span id={"stars-body"} className={"body"}>When the level is failed or anticheat is triggered because of too many moves in one go, you get 0 gold stars.<br /><br />When the level is cleared with a suboptimal solution, you get 1 gold star.<br /><br />When the level is cleared with one more move than the optimal solution, you get 2 gold stars.<br /><br />When the level is cleared with the optimal solution (or even fewer moves than the optimal solution), you get 3 gold stars.</span>
                        </div>
                        <div id={"stars-img-wrapper"} className={"img-wrap"}>
                            <img src={`${process.env.PUBLIC_URL}/assets/how/gridstarsHEIGHT1000.png`} alt={"stars"} id={"how-stars"} className={"img"}/>
                        </div>
                    </section>
                    <div id={"back-bt-wrapper"}>
                        <Route render={({history}) => (
                            <span
                                id={"back-bt"}
                                onClick={() => {
                                    history.push("/")
                                }}>
                            Back
                        </span>
                        )} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default How;