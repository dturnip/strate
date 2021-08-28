import {NNA} from "../types/aliases";

export const compressRight = (matrix: NNA): NNA => {
	let ret: NNA = [];
	for (let r = 0; r < matrix.length; r++) {
		let filtered: Array<number> = matrix[r].filter(v => v);
		let shiftct: Array<number> = Array(matrix[r].length - filtered.length).fill(0);
		ret.push(shiftct.concat(filtered));
	}
	return ret;
}

export const compressLeft = (matrix: NNA): NNA => {
	let ret: NNA = [];
	for (let r = 0; r < matrix.length; r++) {
		let filtered: Array<number> = matrix[r].filter(v => v);
		let shiftct: Array<number> = Array(matrix[r].length - filtered.length).fill(0);
		ret.push(filtered.concat(shiftct));
	}

	return ret;
}

export const transposeToColumns = (matrix: NNA): NNA => {
	let cols: NNA = [];
	for (let r = 0; r < matrix.length; r++) {
		let col: Array<number> = [];
		for (let c = 0; c < matrix.length; c++) {
			col.push(matrix[c][r]);
		}
		cols.push(col);
	}
	return cols;
}

export const transposeToRows = (matrix: NNA): NNA => {
	return transposeToColumns(matrix);
}

export const compressUp = (matrix: NNA): NNA => {
	let transform: NNA = transposeToColumns(matrix);
	let leftCompr: NNA = [];
	for (let r = 0; r < transform.length; r++) {
		let filtered: Array<number> = transform[r].filter(v => v);
		let shiftct: Array<number> = Array(transform[r].length - filtered.length).fill(0);
		leftCompr.push(filtered.concat(shiftct));
	}
	return leftCompr;
}

export const compressDown = (matrix: NNA): NNA => {
	let transform: NNA = transposeToColumns(matrix);
	let rightCompr: NNA = [];
	for (let r = 0; r < transform.length; r++) {
		let filtered: Array<number> = transform[r].filter(v => v);
		let shiftct: Array<number> = Array(transform[r].length - filtered.length).fill(0);
		rightCompr.push(shiftct.concat(filtered));
	}
	return rightCompr;
}

export const mergeX = (matrix: NNA): NNA => {
	for (let r = 0; r < matrix.length; r++) {
		for (let c = 0; c < matrix[r].length; c++) {
			if (c === matrix[r].length - 1) {
				continue;
			}
			if (matrix[r][c] === matrix[r][c + 1]) {
				let merge: number = matrix[r][c] + matrix[r][c + 1];
				matrix[r][c] = merge;
				matrix[r][c + 1] = 0;
			}
		}
	}
	return matrix;
}

export const morphRight = (matrix: NNA): NNA => {
	return compressRight(mergeX(compressRight(matrix)));
}

export const morphLeft = (matrix: NNA): NNA => {
	return compressLeft(mergeX(compressLeft(matrix)));
}
