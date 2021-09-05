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
                <div id={"bt-wrapper"}>
                    <Route render={({history}) => (
                        <span
                            id={"start-bt"}
                            onClick={() => {
                                history.push("/play")
                            }}>
                            Start!
                        </span>
                    )} />
                </div>
                <span style={{fontWeight: "bold"}}><u>NB: Only landscape mode is supported</u></span>
            </div>
        </>
    )
}
