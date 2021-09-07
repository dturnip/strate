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

export const GameBoard: React.FC<GameBoardProps> = ({ map }) => {
	// const [cellMatrix, updateCellMatrix] = useState<NNA>(newShootMatrix(2));
	// const [cellMatrix, updateCellMatrix] = useState<NNA>(newRandShootMatrix());
	const [cellMatrix, updateCellMatrix] = useState<NNA>(map);

	useEffect(() => {
		updateCellMatrix(map);
	}, [map]);

	const handleKeyDown = (event: KeyboardEvent) => {
		// switch (event.key) {
		// 	case "ArrowUp":
		// 		updateCellMatrix(morphUp(cellMatrix));
		// 		break;
		// 	case "ArrowRight":
		// 		updateCellMatrix(morphRight(cellMatrix));
		// 		break;
		// 	case "ArrowDown":
		// 		updateCellMatrix(morphDown(cellMatrix));
		// 		break;
		// 	case "ArrowLeft":
		// 		updateCellMatrix(morphLeft(cellMatrix));
		// 		break;
		// }
        setTimeout(() => {
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
		}, 0)
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
