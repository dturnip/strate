import React, { useState, useEffect } from 'react';
import '../styles/game/cell.scss';
import '../styles/game/board.scss';
import { GameCell } from "../types/interfaces";
import { NNA } from "../types/aliases";
import { GameBoardProps } from "../types/interfaces";
import { morphRight, morphLeft, morphUp, morphDown } from "../lib/GridLogic";

const Cell: React.FC<GameCell> = ({n}) => {
    return (
        <div className={`cell type${n}`}>
            {n > 0 ? n : ""}
        </div>
    );
}

// const newShootMatrix = (shootInit: number): NNA => {
// 	let grid: NNA = [];
// 	for (let r = 0; r < 8; r++) {
// 		grid.push([]);
// 		for (let c = 0; c < 8; c++) {
// 			grid[r].push(shootInit);
// 		}
// 	}
// 	return grid;
// }

// const newRandShootMatrix = (): NNA => {
// 	const shootArray: Array<number> = [0, 2, 4, 8, 16, 32];
// 	let grid: NNA = [];
// 	for (let r = 0; r < 8; r++) {
// 		grid.push([]);
// 		for (let c = 0; c < 8; c++) {
// 			grid[r].push(shootArray[Math.floor(Math.random() * 7)])
// 		}
// 	}
// 	return grid;
// }

export const GameBoard: React.FC<GameBoardProps> = ({ map }) => {
	// const [cellMatrix, updateCellMatrix] = useState<NNA>(newShootMatrix(2));
	// const [cellMatrix, updateCellMatrix] = useState<NNA>(newRandShootMatrix());
	const [cellMatrix, updateCellMatrix] = useState<NNA>(map);

	useEffect(() => {
		updateCellMatrix(map);
	}, [map]);

	const handleKeyDown = (event: KeyboardEvent) => {
		switch (event.key) {
			case "ArrowUp":
				updateCellMatrix(morphUp(cellMatrix));
				break;
			case "ArrowRight":
				updateCellMatrix(morphRight(cellMatrix));
				break;
			case "ArrowDown":
				updateCellMatrix(morphDown(cellMatrix));
				break;
			case "ArrowLeft":
				updateCellMatrix(morphLeft(cellMatrix));
				break;
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

    return (
        <div className={"board-wrapper"}>
            <div className={"board"}>
                {cellMatrix.map((r: number[]) => {
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
