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
                </div>
            </div>
        </>
    )
}

export default How;