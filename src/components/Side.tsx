import React, {useState, useEffect} from 'react';
import {SideButton} from "./SideButton";
import "../styles/game/side.scss"
import {SideProps} from "../types/interfaces";

export const Side: React.FC<SideProps> = ({points, objective, moves}) => {
    return (
        <>
            <div id={"side-wrapper"}>
                {/*<h1>Side</h1>*/}
                <section id={"points"}>
                    <SideButton construct={"Points"} data={points}/>
                </section>

                <section id={"objective"}>
                    <SideButton construct={"Objective"} data={objective}/>
                </section>

                <section id={"Moves"}>
                    <SideButton construct={"Moves"} data={moves}/>
                </section>

                {/* Experimental Stuff */}
                {/*<section id={"Completed"}>*/}
                {/*    <SideButton construct={"[Experimental] Percentage"} data={"0%"}/>*/}
                {/*</section>*/}
            </div>
        </>
    )
}
