import React, { useState, useEffect } from 'react';
import '../styles/game/cell.css';
import '../styles/game/board.css';
import { GameCell } from "../types/interfaces";
import { Direction } from "../types/enums";
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

export const GameBoard: React.FC = () => {
	let grid = [...Array(8)].map(_ => Array(8).fill(2));

	const handleMove = (dir: Direction): void => {
		switch (dir) {
			case Direction.Up:
				grid = morphUp(grid);
				break;
			case Direction.Right:
				grid = morphRight(grid);
				break;
			case Direction.Down:
				grid = morphDown(grid);
				break;
			case Direction.Left:
				grid = morphLeft(grid);
				break;
		}
	}

	handleMove(Direction.Left);
	// handleMove(Direction.Up);
	// handleMove(Direction.Down);
	// handleMove(Direction.Right);
	// handleMove(Direction.Left);
	// handleMove(Direction.Up);

    return (
        <div className={"board-wrapper"}>
            <div className={"board"}>
                {grid.map((r: number[]) => {
                    return (
                        r.map((c: number, idx: number) => {
                            return <Cell n={c} key={idx}/>
                        })
                    )
                })}
            </div>
        </div>
    );
}
