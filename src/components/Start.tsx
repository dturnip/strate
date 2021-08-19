import React from 'react';
import coffeebk from '../img/coffee-bk.png';
import '../styles/home/home.css';

export const Start: React.FC = () => {
    return (
        <>
            <div className={"flex-wrapper"}>
                <div id={"cb-wrapper"}>
                    <img id={"coffee-bk"} src={coffeebk} alt={"coffee-bk"}/>
                </div>
                <div id={"start-wrapper"}>
                    <span id={"start-bt"}>Start!</span>
                </div>
            </div>
        </>
    )
}
