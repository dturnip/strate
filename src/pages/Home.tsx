import React, { useEffect } from 'react';
import {BgParticles} from "../components/BgParticles";
import {Start} from "../components/Start";
import {lGet, sGet, lSet, sSet} from "../lib/Storage";

const Home = () => {
    useEffect(() => {
        if (!lGet("coffee")) lSet("coffee")(0);
    }, []);

    return (
        <>
            <BgParticles />
            <Start />
        </>
    )
}

export default Home;
