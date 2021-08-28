import {NNA} from "../types/aliases";

// shoot
// export function printMatrix(matrix: NNA) {
// 	let ret = "";
// 	for (let r = 0; r < matrix.length; r++) {
// 		for (let c = 0; c < matrix[r].length; c++) {
// 			const curr = matrix[r][c].toString();
// 			if (c < matrix[r].length - 1) {
// 				ret = `${ret} ${curr}`;
// 			}
// 			if (c === matrix[r].length - 1) {
// 				ret = `${ret} ${curr}\n`;
// 			}
// 		}
// 	}
// 	return ret;
// }

export const compressRight = (matrix: NNA): NNA => {
	let ret: NNA = [];
	for (let r = 0; r < matrix.length; r++) {
		let filtered: Array<number> = matrix[r].filter(v => v);
		let shiftct: Array<number> = Array(matrix[r].length - filtered.length).fill(0);
		ret.push(shiftct.concat(filtered));
	}
	return ret;
}

