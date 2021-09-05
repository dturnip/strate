import React, { useEffect } from 'react';
import {BgParticles} from "../components/BgParticles";
import {Start} from "../components/Start";

const Home = () => {
    const set = (k: string) => (v: any) => localStorage.setItem(k, v);
    const get = (k: string) => localStorage.getItem(k);

    useEffect(() => {
        set("coffees")(0);
    }, []);

    return (
        <>
            <BgParticles />
            <Start />
        </>
    )
}

export default Home;
