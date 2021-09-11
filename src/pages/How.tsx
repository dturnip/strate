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
                </div>
            </div>
        </>
    )
}

export default How;