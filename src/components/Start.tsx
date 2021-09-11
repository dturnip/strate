import React from 'react';
import { Route } from 'react-router-dom';
import coffeebk from '../img/coffee-bk.png';
import '../styles/home/home.scss';

export const Start: React.FC = () => {
    return (
        <>
            <div className={"flex-wrapper"}>
                <div id={"cb-wrapper"}>
                    <img id={"coffee-bk"} src={coffeebk} alt={"coffee-bk"}/>
                </div>
                <div id={"bts-wrapper"}>
                    <div id={"start-bt-wrapper"}>
                        <Route render={({history}) => (
                            <span
                                id={"start-bt"}
                                onClick={() => {
                                    history.push("/play")
                                }}>
                            Start Game!
                        </span>
                        )} />
                    </div>
                    <div id={"how-bt-wrapper"}>
                        <Route render={({history}) => (
                            <span
                                id={"how-bt"}
                                onClick={() => {
                                    history.push("/how")
                                }}>
                            How To Play
                        </span>
                        )} />
                    </div>
                </div>
                <span style={{fontWeight: "bold"}}><u>NB: Only landscape mode is supported</u></span>
            </div>
        </>
    )
}
