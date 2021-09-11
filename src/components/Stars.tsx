import React from 'react';
import "../styles/game/stars.scss";
export const Stars: React.FC<StarProps> = ({
    usedMoves,
    maxMoves,
    bestMoves,
    clear,
}) => {
    return (
        <div id={"stars-stat"}>
        </div>
    );
}
