import React, { useState, useEffect } from 'react';
import '../styles/game/cell.css';
import '../styles/game/board.css';
import {GameCell} from "../types/interface";
import { morphLeft, morphRight, morphUp, morphDown } from "../lib/GridLogic";

const Cell: React.FC<GameCell> = ({n}) => {
    return (
        <div className={`cell type-${n}`}>
            {n > 0 ? n : ""}
        </div>
    );
}

// replace with custom map later
// let grid: Array<Array<number>> = [];
// for (let r = 0; r < gridN; r++) {
//     grid.push([]);
//     for (let c = 0; c < gridN; c++) {
//         grid[r].push(1);
//     }
// }

    }
}

export const GameBoard: React.FC = () => {
    return (
        <div className={"board-wrapper"}>
            <div className={"board"}>
                {grid.map((r) => {
                    return (
                        r.map((c) => {
                            return <Cell n={c}/>
                        })
                    )
                })}
            </div>
        </div>
    );
}
