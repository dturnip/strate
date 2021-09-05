import React, {useState, useEffect} from "react";

interface SideButtonProps {
    construct: string;
    data: string;
}

export const SideButton: React.FC<SideButtonProps> = ({ construct, data }) => {
    return (
        <>
            <div className={"side-button"}>
                <span id={"construct"}><u>{construct}</u></span>
                <br/>
                <br/>
                <span id={"data"}>{data}</span>
            </div>
        </>
    )
}
